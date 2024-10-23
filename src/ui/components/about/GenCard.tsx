import React from "react";
import { Service } from "../../../constants/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GenCard: React.FC<Service> = ({ icon, title, description }) => {
  return (
    <div className="group flex-grow max-w-[270px] flex flex-col items-center gap-y-1 border p-5 hover:bg-red-500 hover:text-white">
      <div className="bg-black group-hover:bg-white group-hover:text-black group-hover:border-opacity-50 size-10 md:size-16 lg:size-20 rounded-full text-neutral-100 flex items-center justify-center border-4 lg:border-8 border-gray-400 p-2 md:mb-2 lg:mb-5">
        <FontAwesomeIcon icon={icon} className="md:text-lg lg:text-2xl" />
      </div>
      <h2 className="font-semibold lg:text-xl">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default GenCard;
