import { Category } from "../../constants/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const END_POINT = import.meta.env.VITE_GET_CATEGORIES;

// Ensure environment variables are defined at runtime
if (!BASE_URL || !END_POINT) {
  throw new Error(
    "BASE_URL or VITE_GET_ALL_CATEGORIES is not defined in environment variables."
  );
}

export const getCategoriesAPI = createApi({
  reducerPath: "CategoriesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(builder) {
    return {
      fetchAllCategories: builder.query<Array<Category>, void>({
        query() {
          return END_POINT;
        },
        transformResponse: (response: {
          results: number;
          data: Array<Category>;
        }) => {
          // Only return the 'data' array from the response
          return response.data;
        },
      }),
    };
  },
});

export const { useFetchAllCategoriesQuery } = getCategoriesAPI;
