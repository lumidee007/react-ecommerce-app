import {createSelector} from "reselect"


//return the shop from the root-reducer
const selectShop = state => state.shop


// Returns collections from the shop data object
export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)


export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
  );


export const selectCollection = collectionURLParam => (
    createSelector(
       [selectShopCollections],
       collections => collections[collectionURLParam]
    )
)