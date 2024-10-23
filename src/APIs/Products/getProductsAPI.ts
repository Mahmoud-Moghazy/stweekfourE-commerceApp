import { Product } from "../../constants/interfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const END_POINT = import.meta.env.VITE_GET_PRODUCTS;

if (!BASE_URL || !END_POINT) {
  throw new Error(
    "BASE_URL or GET_PRODUCTS is not defined in environment variables."
  );
}

export const getProductsAPI = createApi({
  reducerPath: "ProductsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(builder) {
    return {
      fetchAllProducts: builder.query<{
        results: number; 
        metadata: {
          currentPage: number;
          numberOfPages: number;
          limit: number;
          nextPage?: number;
        };
        data: Array<Product>; // Array of products
      }, { page: number; limit: number }>({
        query({ page, limit }) {
          return `${END_POINT}?page=${page}&limit=${limit}`;
        },
        transformResponse: (response: {
          results: number;
          metadata: {
            currentPage: number;
            numberOfPages: number;
            limit: number;
            nextPage?: number;
          };
          data: Array<Product>;
        }) => {
          return {
            results: response.results,
            metadata: response.metadata,
            data: response.data,
          };
        },
      }),
      
      fetchProductById: builder.query<Product, string>({
        query(id) {
          return `${END_POINT}/${id}`;
        },
        transformResponse: (response: { data: Product }) => {
          return response.data;
        },
      }),
      fetchProductsByCategory: builder.query<Array<Product>,{ categoryId?: string }>({
        query({ categoryId }) {
          let queryStr = END_POINT;
          if (categoryId) {
            queryStr += `?category[in]=${categoryId}`;
          }
          return queryStr;
        },
        transformResponse: (response: {
          results: number;
          data: Array<Product>;
        }) => {
          return response.data;
        },
      }),
      fetchProductsByBrand: builder.query<Array<Product>, { brandId?: string }>(
        {
          query({ brandId }) {
            let queryStr = END_POINT;
            if (brandId) {
              queryStr += `?brand=${brandId}`;
            }
            return queryStr;
          },
          transformResponse: (response: {
            results: number;
            data: Array<Product>;
          }) => {
            return response.data;
          },
        }
      ),
    };
  },
});

export const {
  useFetchAllProductsQuery,
  useFetchProductByIdQuery,
  useFetchProductsByCategoryQuery,
  useFetchProductsByBrandQuery,
} = getProductsAPI;
