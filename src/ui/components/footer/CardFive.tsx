import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "../../../assets/images";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const CardFive: React.FC = () => {
  return (
    <div className="text-neutral-100 max-w-[217px]">
      <h4 className="font-medium text-xl mb-2 md:mb-4">Download App</h4>
      <p className="mb-2 font-medium text-xs text-gray-500 ">
        Save $3 with App New User Only
      </p>
      <div className="grid grid-cols-2 gap-2 items-center mb-3 md:mb-5 lg:mb-7">
        <div className="row-span-2">
          <img
            src={images.QRCode}
            alt="image One"
            className="border object-contain"
          />
        </div>
        <div className="">
          <img
            src={images.google}
            alt="image Two"
            className="border rounded-md object-contain"
          />
        </div>
        <div className="">
          <img
            src={images.apple}
            alt="image Three"
            className="border rounded-md object-contain"
          />
        </div>
      </div>

      <div className="flex items-center justify-evenly">
        <FontAwesomeIcon icon={faFacebookF} className="md:text-lg lg:text-xl"/>
        <FontAwesomeIcon icon={faTwitter} className="md:text-lg lg:text-xl"/>
        <FontAwesomeIcon icon={faInstagram} className="md:text-lg lg:text-xl"/>
        <FontAwesomeIcon icon={faLinkedinIn} className="md:text-lg lg:text-xl"/>
      </div>
    </div>
  );
};

export default CardFive;
