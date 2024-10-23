import React from "react";
import images from "../../../assets/images";
import { Link } from "react-router-dom";

const EmptyCart: React.FC = () => {
  return (
    <div className="container py-9 md:py-14 text-center">
      <img
        src={images.emptyCart}
        alt="empty cart"
        className="w-1/2 m-auto mb-5 object-cover object-center"
      />
      <Link
        to={"/home"}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-300"
      >
        Back To Home
      </Link>
    </div>
  );
};

export default EmptyCart;
