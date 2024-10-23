import React from "react";
import AddToCart from "../AddToCart";
import { ProductCardProps } from "../../../constants/interfaces";
import RemoveFromWishList from "./RemoveFromWishList";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  priceAfterDiscount,
  price,
  imageCover,
}) => {
  return (
    <div className="max-w-[270px]">
      <div className="group relative overflow-hidden">
        {priceAfterDiscount !== null &&
          priceAfterDiscount !== undefined &&
          priceAfterDiscount !== 0 && (
            <span className="absolute bg-red-500 text-white rounded text-xs py-1 px-2 top-2 left-2">
              -{Math.round(((price - priceAfterDiscount) / price) * 100)}%
            </span>
          )}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <RemoveFromWishList id={id}/>
        </div>

        <img
          src={imageCover}
          alt={title}
          className="w-full h-40 object-contain bg-neutral-100"
        />
        <AddToCart id={id} icon={true} className="mb-3" />
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
    </div>
  );
};

export default ProductCard;
