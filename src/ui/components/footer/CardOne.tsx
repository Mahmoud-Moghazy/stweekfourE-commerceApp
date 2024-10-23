import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardOne: React.FC = () => {
  return (
    <div className="text-neutral-100 max-w-[217px]">
      <h1 className="font-bold text-xl lg:text-2xl mb-2 md:mb-4">Exclusive</h1>
      <p className="font-medium md:text-xl mb-2 md:mb-4">Subscribe</p>
      <p className="mb-2">Get 10% off your first order</p>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Enter your Email"
          className="p-2 mb-2 md:mb-4 bg-transparent border-2 rounded-sm"
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="absolute end-4 mb-3 md:mb-4"
        />
      </div>
    </div>
  );
};

export default CardOne;
