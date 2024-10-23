import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SignUpField, SignInField } from "../../constants/interfaces";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const SIGN_UP = import.meta.env.VITE_SIGN_UP;
const SIGN_IN = import.meta.env.VITE_SIGN_IN;

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData: SignUpField) => ({
        url: SIGN_UP,
        method: "POST",
        body: userData,
      }),
    }),
    signIn: builder.mutation({
      query: (credentials: SignInField) => ({
        url: SIGN_IN,
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authAPI;
