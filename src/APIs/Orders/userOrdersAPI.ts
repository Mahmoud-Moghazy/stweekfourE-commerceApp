// src/store/paymentApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const END_POINT = import.meta.env.VITE_PAYMENT;

export const userOrdersAPI = createApi({
  reducerPath: 'userOrdersAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    // Cash on delivery payment
    fetchUserOrders: builder.mutation({
      query: ({ userId }) => ({
        url: `${END_POINT}user/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useFetchUserOrdersMutation } = userOrdersAPI;
