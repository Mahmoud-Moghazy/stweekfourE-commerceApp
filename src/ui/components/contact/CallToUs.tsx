import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CallToUs: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 border-b-2 pb-10">
      <div className="flex items-center gap-5">
        <span className="size-10 rounded-full bg-red-500 text-white flex items-center justify-center">
          <FontAwesomeIcon icon={faPhone} className="fa-fw"/>
        </span>
        <p className="font-medium">Call To Us</p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-sm whitespace-nowrap">We are available 24/7, 7 days a week.</p>
        <p className="text-sm">Phone: +8801611112222</p>
      </div>
    </div>
  );
};

export default CallToUs;
