package dataloaders2

import (
	"github.com/google/uuid"
	"github.com/vikstrous/dataloadgen"

	"github.com/cmsgov/easi-app/pkg/models"
	"github.com/cmsgov/easi-app/pkg/storage"
)

type dataReader struct {
	db *storage.Store
}

type DataLoaders struct {
	//CedarSystemBookmark *dataloadgen.Loader[models.BookmarkRequest, bool]

	SystemIntakeContractNumbers *dataloadgen.Loader[uuid.UUID, []*models.SystemIntakeContractNumber]
	SystemIntakeSystems         *dataloadgen.Loader[uuid.UUID, []*models.SystemIntakeSystem]
	TRBRequestContractNumbers   *dataloadgen.Loader[uuid.UUID, []*models.TRBRequestContractNumber]
	TRBRequestSystems           *dataloadgen.Loader[uuid.UUID, []*models.TRBRequestSystem]
}

func NewDataLoaders(store *storage.Store) *DataLoaders {
	dr := &dataReader{
		db: store,
	}
	return &DataLoaders{
		// CedarSystemBookmark:         dataloadgen.NewLoader(dr.getCedarSystemIsBookmarked),
		SystemIntakeContractNumbers: dataloadgen.NewLoader(dr.getSystemIntakeContractNumbersBySystemIntakeID),
		SystemIntakeSystems:         dataloadgen.NewLoader(dr.getSystemIntakeSystemsBySystemIntakeID),
		TRBRequestContractNumbers:   dataloadgen.NewLoader(dr.getTRBRequestContractNumbersByTRBRequestID),
		TRBRequestSystems:           dataloadgen.NewLoader(dr.getTRBRequestSystemsByTRBRequestID),
	}
}