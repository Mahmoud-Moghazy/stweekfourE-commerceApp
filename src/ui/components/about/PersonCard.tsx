import React from "react";
import { Person } from "../../../constants/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PersonCard: React.FC<Person> = ({ image, name, title, icons }) => {
  return (
    <div className="md:w-[370px] flex flex-col gap-8 rounded-sm mb-5">
      <div className="bg-neutral-100 overflow-hidden h-[430px]">
        <img
          src={image}
          alt={`${name} image`}
          className="w-full h-full object-cover object-top mt-9" 
        />
      </div>
      <div>
        <h2 className="font-medium text-[32px]">{name}</h2>
        <p>{title}</p>
      </div>
      <div className="flex items-center gap-4">
        {icons.map((icon, index) => (
          <FontAwesomeIcon key={index} icon={icon} size="lg" />
        ))}
      </div>
    </div>
  );
};

export default PersonCard;
