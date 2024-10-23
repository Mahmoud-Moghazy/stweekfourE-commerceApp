import React from "react";
import { Service } from "../../constants/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-y-1">
      <div className="bg-black size-10 md:size-16 lg:size-20 rounded-full text-neutral-100 flex items-center justify-center border-4 lg:border-8 border-gray-400 p-2 md:mb-2 lg:mb-5">
        <FontAwesomeIcon icon={icon} className="md:text-lg lg:text-2xl"/>
      </div>
      <h2 className="font-semibold lg:text-xl">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
