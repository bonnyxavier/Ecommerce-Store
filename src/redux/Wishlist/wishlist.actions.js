import wishListType from "./wishlist.constants";

export const addToWishlist = (wishListItem) => (
    {
        type: wishListType.ADD_TO_WISHLIST,
        payload: wishListItem
    }
)