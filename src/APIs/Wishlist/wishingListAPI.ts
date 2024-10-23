import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const END_POINT = import.meta.env.VITE_WISH_LIST;

export const wishlistAPI = createApi({
  reducerPath: "wishlistAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("token", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchWishlist: builder.query({
      query: () => END_POINT,
    }),
    addToWishlist: builder.mutation({
      query: (productId) => ({
        url: END_POINT,
        method: "POST",
        body: { productId },
      }),
    }),
    removeFromWishlist: builder.mutation({
      query: (productId) => ({
        url: `${END_POINT}/${productId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useFetchWishlistQuery,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} = wishlistAPI;
