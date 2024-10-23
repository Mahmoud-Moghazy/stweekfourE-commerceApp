import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { AddToProps } from "../../constants/interfaces";
import { faEye } from "@fortawesome/free-regular-svg-icons";

const ProductDetailsBtn: React.FC<AddToProps> = ({ id }) => {
  return (
    <Link
      to={`/productDetails/${id}`}
      className="p-2 size-7 md:size-9 rounded-full bg-white shadow hover:bg-gray-100 flex items-center justify-center"
    >
      <FontAwesomeIcon icon={faEye} />
    </Link>
  );
};

export default ProductDetailsBtn;
