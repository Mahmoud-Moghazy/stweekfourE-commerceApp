import { Brand } from "../../constants/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const END_POINT = import.meta.env.VITE_GET_BRANDS;

export const getBrandsAPI = createApi({
  reducerPath: "BrandsAPI",
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints(builder) {
    return {
      fetchAllBrands: builder.query<Brand[], void>({
        query() {
          return END_POINT;
        },
        transformResponse: (response: { results: number; data: Brand[] }) => {
          // Only return the 'data' array from the response
          return response.data;
        },
      }),
    };
  },
});

export const { useFetchAllBrandsQuery } = getBrandsAPI;
