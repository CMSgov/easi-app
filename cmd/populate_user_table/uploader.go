package main

import (
	"fmt"

	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/jmoiron/sqlx"
	"github.com/spf13/viper"
	"go.uber.org/zap"

	"github.com/cmsgov/easi-app/pkg/appconfig"
	"github.com/cmsgov/easi-app/pkg/oktaapi"
	"github.com/cmsgov/easi-app/pkg/storage"

	_ "embed"
)

//go:embed SQL/get_all_usernames.sql
var getAllUserNamesSQL string

// Uploader handles functionality for uploading data to the DB
type Uploader struct {
	Store  storage.Store
	DB     *sqlx.DB
	Logger zap.Logger
	Okta   *oktaapi.ClientWrapper
}

// NewUploader instantiates an Uploader
func NewUploader(config *viper.Viper) *Uploader { //TODO make this more configurable if needed
	// config := viper.New()
	// config.AutomaticEnv()

	db, logger, okta := getResolverDependencies(config)
	return &Uploader{
		// Store:  *store,
		DB:     db,
		Logger: *logger,
		Okta:   okta,
	}
}

func (u *Uploader) QueryUsernames() ([]string, error) {
	usernames := []string{}

	err := u.DB.Select(&usernames, getAllUserNamesSQL)

	if err != nil {
		return nil, fmt.Errorf(" unable to query usernames %w", err)

	}

	return usernames, nil

}

// getResolverDependencies takes a Viper config and returns a Store and Logger object to be used
// by various resolver functions.
func getResolverDependencies(config *viper.Viper) (
	*sqlx.DB,
	*zap.Logger,
	*oktaapi.ClientWrapper,
) {
	// Create the logger
	logger := zap.NewNop()

	oktaClient, oktaClientErr := oktaapi.NewClient(config.GetString(appconfig.OKTAAPIURL), config.GetString(appconfig.OKTAAPIToken))
	if oktaClientErr != nil {
		logger.Fatal("failed to create okta api client", zap.Error(oktaClientErr))
	}
	// Create the DB Config & Store
	dbConfig := storage.DBConfig{
		Host:           config.GetString(appconfig.DBHostConfigKey),
		Port:           config.GetString(appconfig.DBPortConfigKey),
		Database:       config.GetString(appconfig.DBNameConfigKey),
		Username:       config.GetString(appconfig.DBUsernameConfigKey),
		Password:       config.GetString(appconfig.DBPasswordConfigKey),
		SSLMode:        config.GetString(appconfig.DBSSLModeConfigKey),
		MaxConnections: config.GetInt(appconfig.DBMaxConnections),
	}
	// store, err := storage.NewStore(dbConfig, ldClient)
	// if err != nil {
	// 	fmt.Printf("Failed to get new database: %v", err)
	// 	panic(err)

	db, err := newDB(dbConfig)
	if err != nil {
		fmt.Printf("Failed to get new database: %v", err)
		panic(err)
	}

	return db, logger, oktaClient
}

func newDB(config storage.DBConfig) (*sqlx.DB, error) {

	var db *sqlx.DB
	var err error
	if config.UseIAM {
		// Connect using the IAM DB package
		sess := session.Must(session.NewSession())
		db = newConnectionPoolWithIam(sess, config)
		err = db.Ping()
		if err != nil {
			return nil, err
		}
	} else {
		// Connect via normal user/pass
		dataSourceName := fmt.Sprintf(
			"host=%s port=%s user=%s "+
				"password=%s dbname=%s sslmode=%s",
			config.Host,
			config.Port,
			config.Username,
			config.Password,
			config.Database,
			config.SSLMode,
		)

		db, err = sqlx.Connect("postgres", dataSourceName)
		if err != nil {
			return nil, err
		}
	}

	db.SetMaxOpenConns(config.MaxConnections)
	return db, nil
}
