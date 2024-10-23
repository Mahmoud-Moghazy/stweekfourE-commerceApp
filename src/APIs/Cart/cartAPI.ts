import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const END_POINT = import.meta.env.VITE_CART;

export const cartAPI = createApi({
  reducerPath: "cartAPI",
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
    fetchCart: builder.query({
      query: () => END_POINT,
    }),
    addItemToCart: builder.mutation({
      query: (productId) => ({
        url: END_POINT,
        method: "POST",
        body: { productId },
      }),
    }),
    removeItemFromCart: builder.mutation({
      query: (itemId) => ({
        url: `${END_POINT}/${itemId}`,
        method: "DELETE",
      }),
    }),
    updateQuantity: builder.mutation({
      query: ({id,count}) =>({
        url: `${END_POINT}/${id}`,
        method: "PUT",
        body:{count}
      })
    }),
  }),
});

export const {
  useFetchCartQuery,
  useAddItemToCartMutation,
  useRemoveItemFromCartMutation,
  useUpdateQuantityMutation,
} = cartAPI;
