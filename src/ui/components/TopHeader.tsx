import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const TopHeader: React.FC = () => {
  return (
    <div className="bg-black text-white text-sm py-3">
      <div className="container flex items-center justify-between">
        <p className="flex-1 text-center px-3">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-bold ml-2 underline">ShopNow</span>
        </p>
        <button className="text-white flex items-center gap-2">
          English
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
