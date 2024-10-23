import React, { useState } from "react";
import { useFetchAllProductsQuery } from "../../../APIs/Products/getProductsAPI";
import LoadingScreen from "../LoadingScreen";
import NotFound from "../NotFound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Card from "../wishingList/Card";
import { Product } from "../../../constants/interfaces";

interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
}

interface ApiResponse {
  results: number;
  metadata: Metadata;
  data: Array<Product>;
}

const AllProducts: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const { data, isLoading, error } = useFetchAllProductsQuery({ page, limit });

  if (isLoading) return <LoadingScreen />;
  if (error) return <NotFound />;

  const { metadata, data: products } = data as ApiResponse;
  const { currentPage, numberOfPages, nextPage } = metadata;

  const pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);

  return (
    <div className="container py-9 md:py-14">
      <div className="text-sm font-medium flex items-center gap-2 mb-9 md:mb-14">
        <Link to={"/home"} className="text-gray-500">
          Home
        </Link>
        <span>/</span>
        <span>Products</span>
        {/* Optional limit controls */}
        <select
          className="bg-black text-white p-1 rounded cursor-pointer"
          onChange={(e) => setLimit(Number(e.target.value))}
          value={limit}
        >
          <option className="bg-black bg-opacity-50" value={5}>5 per page</option>
          <option className="bg-black bg-opacity-50" value={10}>10 per page</option>
          <option className="bg-black bg-opacity-50" value={20}>20 per page</option>
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-9 md:mb-14">
        {products.map((pro) => (
          <Card key={pro.id} {...pro} />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center">
        <div className="flex  gap-3">
          <button
            className={
              currentPage === 1
                ? "hidden"
                : "size-6 border bg-black text-white rounded-s hover:bg-red-500"
            }
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {/* Pagination Controls */}
          <div className="flex items-center gap-1">
            {pages.map((pageNumber) => (
              <button
                key={pageNumber}
                className={`size-6 border rounded-sm hover:bg-black hover:text-white ${
                  pageNumber === currentPage ? "bg-red-500 text-white" : ""
                }`}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
          <button
            className={
              currentPage === numberOfPages
                ? "hidden"
                : "size-6 border bg-black text-white rounded-e hover:bg-red-500"
            }
            onClick={() => setPage(nextPage || currentPage + 1)}
            disabled={currentPage === numberOfPages}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
