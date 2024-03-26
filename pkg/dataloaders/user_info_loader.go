package dataloaders

import (
	"context"
	"fmt"

	"github.com/graph-gophers/dataloader"
	"go.uber.org/zap"

	"github.com/cmsgov/easi-app/pkg/appcontext"
	"github.com/cmsgov/easi-app/pkg/models"
)

// BatchUserInfos implements a batch function to populate UserInfo for EUA IDs
func (loaders *DataLoaders) BatchUserInfos(
	ctx context.Context,
	keys dataloader.Keys,
) []*dataloader.Result {
	results := make([]*dataloader.Result, len(keys))
	euas := make([]string, len(keys))
	for i, key := range keys {
		euas[i] = key.String()
	}

	userInfos, err := loaders.FetchUserInfos(ctx, euas)
	if err != nil {
		appcontext.ZLogger(ctx).Error("Error fetching user infos from Okta", zap.Error(err))
		return results
	}

	// If we didn't get an error back, yet there's still an empty slice, we can assume
	// that the Context was cancelled
	//
	// In this case, we don't want to return any errors at all, but
	// instead just return empty results
	if len(userInfos) == 0 {
		appcontext.ZLogger(ctx).Warn("Empty EUA results from FetchUserInfos")
		// // return nil
		// // TODO (context cancelled) make output sooner, make this shared
		// output := make([]*dataloader.Result, len(keys))
		// setEachOutputToError(fmt.Errorf("there is no results"), output)
		// // TODO (context cancelled) This doesn't set the error correctly because it is an array of pointers, and the values are nil
		// // we need to acutally have a non nil data loader result for this to function as expected.
		// return output

		return generateErrors(fmt.Errorf("there is no results"), len(keys))

	}

	// Maps EUAs to UserInfo structs
	euaUserInfoMap := map[string]*models.UserInfo{}
	for _, userInfo := range userInfos {
		euaUserInfoMap[userInfo.Username] = userInfo
	}

	for i, key := range keys {
		if userInfo, ok := euaUserInfoMap[key.String()]; ok {
			results[i] = &dataloader.Result{Data: userInfo, Error: nil}
		} else {
			err := fmt.Errorf("no user info found for EUA ID %s", key.String())
			results[i] = &dataloader.Result{Data: nil, Error: err}
		}
	}
	return results
}

// GetUserInfo pulls the user info from the map that was loaded
// the UserInfoLoader will batch up all requests for user info over a window of 16ms, then make a single request containing all of the EUA IDs
func GetUserInfo(ctx context.Context, euaID string) (*models.UserInfo, error) {
	allLoaders := Loaders(ctx)
	userInfoLoader := allLoaders.UserInfoLoader

	thunk := userInfoLoader.Loader.Load(ctx, dataloader.StringKey(euaID))
	result, err := thunk()
	if err != nil {
		return nil, err
	}
	return result.(*models.UserInfo), nil
}

// generateErrors creates a result with a nil result and error for a desired count (eg every day loader key)
// this is useful in situations where the same error message applies to every result
func generateErrors(err error, count int) []*dataloader.Result {
	output := make([]*dataloader.Result, count)
	for i := 0; i < count; i++ {
		output[i] = &dataloader.Result{
			Error: err,
			Data:  nil,
		}

	}

	return output

}
