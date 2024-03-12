package testhelpers

import (
	"context"
	"fmt"
	"sync"

	"github.com/spf13/viper"
	"go.uber.org/zap"
	ld "gopkg.in/launchdarkly/go-server-sdk.v5"

	"github.com/cmsgov/easi-app/pkg/appconfig"
	"github.com/cmsgov/easi-app/pkg/appcontext"
	"github.com/cmsgov/easi-app/pkg/dataloaders"
	"github.com/cmsgov/easi-app/pkg/local"
	"github.com/cmsgov/easi-app/pkg/storage"
)

var configLock = &sync.Mutex{}

// global config for testing
var viperConfig *viper.Viper

// NewConfig returns a global viper config for testing
func NewConfig() *viper.Viper {
	configLock.Lock()
	defer configLock.Unlock()

	if viperConfig == nil {
		viperConfig = viper.New()
		viperConfig.AutomaticEnv()
	}

	return viperConfig
}

type testHelper struct {
	ctx   context.Context
	store *storage.Store
}

func (t *testHelper) Context() context.Context {
	return t.ctx
}

func (t *testHelper) Store() *storage.Store {
	return t.store
}

// NewTestHelper returns a testHelper with ctx and embedded logger, a store, and dataloaders
func NewTestHelper() *testHelper {
	ctx := context.Background()

	ctx = appcontext.WithLogger(ctx, newLogger())

	store := newStore()

	ctx = dataloaders.CTXWithLoaders(ctx, dataloaders.NewDataLoaders(store, local.NewOktaAPIClient().FetchUserInfos))

	return &testHelper{
		ctx:   ctx,
		store: store,
	}
}

func newLogger() *zap.Logger {
	logger, err := zap.NewDevelopment()
	if err != nil {
		panic(fmt.Errorf("failed to create logger in testhelpers: %w", err))
	}

	return logger
}

func newStore() *storage.Store {
	config := NewConfig()

	dbConfig := storage.DBConfig{
		Host:           config.GetString(appconfig.DBHostConfigKey),
		Port:           config.GetString(appconfig.DBPortConfigKey),
		Database:       config.GetString(appconfig.DBNameConfigKey),
		Username:       config.GetString(appconfig.DBUsernameConfigKey),
		Password:       config.GetString(appconfig.DBPasswordConfigKey),
		SSLMode:        config.GetString(appconfig.DBSSLModeConfigKey),
		MaxConnections: config.GetInt(appconfig.DBMaxConnections),
	}

	store, err := storage.NewStore(dbConfig, newLDTestClient())
	if err != nil {
		panic(fmt.Errorf("failed to create new store in testhelpers: %w", err))
	}

	return store
}

func newLDTestClient() *ld.LDClient {
	client, err := ld.MakeCustomClient("fake", ld.Config{Offline: true}, 0)
	if err != nil {
		panic(fmt.Errorf("failed to create ld test client in testhelpers: %w", err))
	}

	return client
}
