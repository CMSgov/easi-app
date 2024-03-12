package dataloaders

import "github.com/graph-gophers/dataloader"

// wrappedDataLoader wraps a DataLoader so it has access to an optional Map
type wrappedDataLoader struct {
	loader *dataloader.Loader
}

func newWrappedDataLoader(batchFn dataloader.BatchFunc) *wrappedDataLoader {

	return &wrappedDataLoader{
		loader: dataloader.NewBatchedLoader(batchFn, dataloader.WithClearCacheOnBatch()),
	}
}
