import React from "react";
import { Product } from "../../../constants/interfaces";

interface Props {
  createdAt: string;
  id: string;
  user: {
    email: string;
    name: string;
    phone: string;
    _id: string;
  };
  paymentMethodType: string;
  totalOrderPrice: number;
  cartItems: Array<Product>;
}

const ItemCard: React.FC<Props> = ({
  createdAt,
  id,
  user,
  paymentMethodType,
  totalOrderPrice,
  cartItems,
}) => {
  return (
    <div className="rounded-lg overflow-hidden border mb-4">
      <div className="bg-neutral-100 p-2 md:p-3 flex justify-between">
        <div className="flex gap-x-4 md:gap-x-6 lg:gap-x-14">
          <div>
            <p>ORDER PLACED</p>
            <p className="text-red-500">
              {new Date(createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
          <div>
            <p>TOTAL</p>
            <p className="text-red-500">${totalOrderPrice}</p>
          </div>
          <div>
            <p>SHIP TO</p>
            <p className="text-red-500">{user.name}</p>
          </div>
          <div>
            <p>PAYMENT METHOD</p>
            <p className="text-red-500">{paymentMethodType}</p>
          </div>
        </div>
        <div>
          <p>
            ORDER ID: #<span className="text-red-500">{id}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col p-3 gap-4">
        {cartItems.map((product) => (
          <div key={product.product.id} className="flex items-center gap-3">
            <div className="size-28 flex-shrink-0 shadow-sm border-b-4 border-red-400 border-">
              <img
                src={product.product.imageCover}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <p>{product.product.title}</p>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemCard;
