import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavigationArrowsProps } from "../../constants/interfaces";

const NavigationArrows: React.FC<NavigationArrowsProps> = ({ scrollRefs }) => {
  const scrollLeft = () => {
    scrollRefs?.forEach((scrollRef) => {
      if (scrollRef?.current) {
        scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
      }
    });
  };

  const scrollRight = () => {
    scrollRefs?.forEach((scrollRef) => {
      if (scrollRef?.current) {
        scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
      }
    });
  };

  return (
    <div className="flex gap-x-2 md:gap-x-3">
      <button
        onClick={scrollLeft}
        className="w-9 h-9 md:w-[46px] md:h-[46px] bg-neutral-100 hover:bg-black hover:text-neutral-100 transition-all duration-500 ease-in-out rounded-full flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        onClick={scrollRight}
        className="w-9 h-9 md:w-[46px] md:h-[46px] bg-neutral-100 hover:bg-black hover:text-neutral-100 transition-all duration-500 ease-in-out rounded-full flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default NavigationArrows;
