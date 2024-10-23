import React from "react";
import { ProductCardProps } from "../../constants/interfaces";
import AddToCart from "./AddToCart";
import AddToWishingList from "./AddToWishingList";
import ProductDetailsBtn from "./ProductDetailsBtn";

// Accept 'product' as a prop and destructure it inside the component
const ProductCard: React.FC<ProductCardProps> = ({
  id,
  ratingsQuantity,
  ratingsAverage,
  title,
  price,
  priceAfterDiscount,
  imageCover,
}) => {
  return (
    <div className="min-w-[270px] mr-4 shadow-sm snap-center">
      <div className="group relative overflow-hidden">
        {priceAfterDiscount !== null &&
          priceAfterDiscount !== undefined &&
          priceAfterDiscount !== 0 && (
            <span className="absolute bg-red-500 text-white rounded text-xs py-1 px-2 top-2 left-2">
              -{Math.round(((price - priceAfterDiscount) / price) * 100)}%
            </span>
          )}

        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <AddToWishingList id={id} className="rounded-full" />
          <ProductDetailsBtn id={id}/>
        </div>

        <img
          src={imageCover}
          alt={title}
          className="w-full h-40 object-contain bg-neutral-100 mb-3"
        />
        <AddToCart id={id} className="absolute bottom-full group-hover:bottom-0 transition-all duration-300 ease-in-out"/>
      </div>
      <h2 className="text-base font-medium text-gray-800">
        {title.split(" ").slice(0, 3).join(" ")}
      </h2>
      <div className="flex items-center space-x-2 my-2">
        <span className="text-red-500 font-medium">
          ${priceAfterDiscount ? priceAfterDiscount : price}
        </span>
        <span className="text-gray-400 line-through">
          {priceAfterDiscount ? `$ ${price}` : ""}
        </span>
      </div>

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
        <span className="text-gray-500 text-sm">({ratingsQuantity})</span>
      </div>
    </div>
  );
};

export default ProductCard;
