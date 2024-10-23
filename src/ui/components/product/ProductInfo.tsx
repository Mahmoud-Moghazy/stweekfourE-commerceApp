import React from "react";
import { Product } from "../../../constants/interfaces";

const ProductInfo: React.FC<Product> = ({
  title,
  ratingsAverage,
  ratingsQuantity,
  quantity,
  price,
  description,
}) => {
  return (
    <div className="flex flex-col gap-2 border-b-2 pb-4">
      <h2 className="font-semibold text-2xl">{title.split(" ").slice(0, 3).join(" ")}</h2>
      <div className="flex items-center gap-1 text-xs">
        <div className="flex items-center space-x-1">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="size-3"
                viewBox="0 0 20 20"
                fill={i < ratingsAverage ? "currentColor" : "none"}
                stroke="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.358 4.18a1 1 0 00.95.69h4.396c.969 0 1.371 1.24.588 1.81l-3.569 2.598a1 1 0 00-.364 1.118l1.357 4.179c.3.921-.755 1.688-1.54 1.118L10 14.348l-3.57 2.598c-.784.57-1.838-.197-1.54-1.118l1.357-4.18a1 1 0 00-.364-1.118L2.31 9.607c-.784-.57-.381-1.81.588-1.81h4.396a1 1 0 00.95-.69l1.357-4.18z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-500">
            ({ratingsQuantity} Reviews)
          </span>
        </div>
        <span>|</span>
        <span>
          {quantity && quantity > 0 ? (
            <span className="text-green-400">In Stock</span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </span>
      </div>
      <p className="text-2xl mb-2">$ {price}</p>
      <p className="max-w-[373px] text-sm line-clamp-3 hover:line-clamp-none">{description}</p>
    </div>
  );
};

export default ProductInfo;
