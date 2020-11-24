// Package server is for setting up the server.
package server

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/spf13/viper"
	"go.uber.org/zap"

	"github.com/cmsgov/easi-app/pkg/appconfig"
	"github.com/cmsgov/easi-app/pkg/handlers"
	"github.com/cmsgov/easi-app/pkg/local"
	"github.com/cmsgov/easi-app/pkg/okta"
)

// Server holds dependencies for running the EASi server
type Server struct {
	router      *mux.Router
	Config      *viper.Viper
	logger      *zap.Logger
	environment appconfig.Environment
}

func (s *Server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.router.ServeHTTP(w, r)
}

// NewServer sets up the dependencies for a server
func NewServer(config *viper.Viper) *Server {

	// Set environment from config
	environment, err := appconfig.NewEnvironment(config.GetString(appconfig.EnvironmentKey))
	if err != nil {
		log.Fatalf("Unable to set environment: %v", err)
	}

	var zapLogger *zap.Logger
	if environment.Dev() || environment.Local() {
		zapLogger, err = zap.NewDevelopment()
	} else {
		zapLogger, err = zap.NewProduction()
	}
	if err != nil {
		log.Fatalf("Failed to initial logger: %v", err)
	}

	// Set the router
	r := mux.NewRouter()

	// TODO: We should add some sort of config verifier to make sure these configs exist
	// They may live in /cmd, but should fail quick on startup
	authMiddleware := okta.NewOktaAuthorizeMiddleware(
		handlers.NewHandlerBase(zapLogger),
		config.GetString("OKTA_CLIENT_ID"),
		config.GetString("OKTA_ISSUER"),
		config.GetBool("ALT_JOB_CODES"),
	)

	// If we're local use override with local auth middleware
	if environment.Local() {
		authMiddleware = local.NewLocalAuthorizeMiddleware(zapLogger, config.GetString("LOCAL_TEST_EUAID"))
	}

	// set up server dependencies
	clientAddress := config.GetString("CLIENT_ADDRESS")

	s := &Server{
		router:      r,
		Config:      config,
		logger:      zapLogger,
		environment: environment,
	}

	// set up routes
	s.routes(
		authMiddleware,
		newCORSMiddleware(clientAddress),
		NewTraceMiddleware(zapLogger),
		NewLoggerMiddleware(zapLogger))

	return s
}

// Serve runs the server
func Serve(config *viper.Viper) {
	s := NewServer(config)
	// start the server
	s.logger.Info("Serving application on port 8080")
	err := http.ListenAndServe(":8080", s)
	if err != nil {
		s.logger.Fatal("Failed to start server", zap.Error(err))
	}
}
