// src/store/paymentApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const END_POINT = import.meta.env.VITE_PAYMENT;
const CHECKOUT_SESSION = import.meta.env.VITE_CHECKOUT_SESSION;
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL;


export const paymentAPI = createApi({
  reducerPath: 'paymentAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set('token', token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Checkout session for card payment
    checkoutSession: builder.mutation({
      query: ({ orderId, shippingAddress }) => ({
        url: `${END_POINT}${CHECKOUT_SESSION}${orderId}?url=${encodeURIComponent(REDIRECT_URL)}`,
        method: 'POST',
        body: { shippingAddress },
      }),
    }),
    // Cash on delivery payment
    cashOnDelivery: builder.mutation({
      query: ({ orderId, shippingAddress }) => ({
        url: `${END_POINT}${orderId}`,
        method: 'POST',
        body: { shippingAddress },
      }),
    }),
  }),
});

export const { useCheckoutSessionMutation, useCashOnDeliveryMutation } = paymentAPI;
