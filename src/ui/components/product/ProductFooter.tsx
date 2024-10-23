import { faRotate, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductFooter: React.FC = () => {
  return (
    <div className="border border-black mt-8">
      <div className="flex items-center gap-4 p-4 border-b border-black">
        <FontAwesomeIcon icon={faTruckFast} className="fa-fw"/>
        <div>
          <p className="font-medium">Free Delivery</p>
          <p className="font-medium text-xs">Enter your postal code for Delivery Availability</p>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4">
        <FontAwesomeIcon icon={faRotate} className="fa-fw"/>
        <div>
          <p className="font-medium">Return Delivery</p>
          <p className="font-medium text-xs">Free 30 Days Delivery Returns. Details</p>
        </div>
      </div>
    </div>
  );
};

export default ProductFooter;
