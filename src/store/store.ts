import { configureStore } from "@reduxjs/toolkit";
import { getCategoriesAPI } from "../APIs/Categories/getCategoriesAPI";
import { getProductsAPI } from "../APIs/Products/getProductsAPI";
import { getBrandsAPI } from "../APIs/Brands/getBrandsAPI";
import authReducer from "../features/user/authSlice";
import { authAPI } from "../APIs/Authentication/authAPI";
import { cartAPI } from "../APIs/Cart/cartAPI";
import cartReducer from "../features/cart/cartSlice";
import { wishlistAPI } from "../APIs/Wishlist/wishingListAPI";
import wishlistReducer from "../features/wishList/wishListSlice";
import { paymentAPI } from "../APIs/Orders/paymentAPI";
import { userOrdersAPI } from "../APIs/Orders/userOrdersAPI";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    [getCategoriesAPI.reducerPath]: getCategoriesAPI.reducer,
    [getProductsAPI.reducerPath]: getProductsAPI.reducer,
    [getBrandsAPI.reducerPath]: getBrandsAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [cartAPI.reducerPath]: cartAPI.reducer,
    [wishlistAPI.reducerPath]: wishlistAPI.reducer,
    [paymentAPI.reducerPath]: paymentAPI.reducer,
    [userOrdersAPI.reducerPath]: userOrdersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(getCategoriesAPI.middleware)
      .concat(getProductsAPI.middleware)
      .concat(getBrandsAPI.middleware)
      .concat(authAPI.middleware)
      .concat(cartAPI.middleware)
      .concat(wishlistAPI.middleware)
      .concat(paymentAPI.middleware)
      .concat(userOrdersAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
