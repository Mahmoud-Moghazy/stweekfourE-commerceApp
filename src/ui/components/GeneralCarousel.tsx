import { GeneralCarouselProps } from "../../constants/interfaces";

const GeneralCarousel: React.FC<GeneralCarouselProps> = ({
  scrollRef,
  children,
}) => {
  return (
    <div className="flex relative mb-4">
      <div
        className="flex items-stretch w-max overflow-x-scroll scroll-smooth hide-scrollbar"
        ref={scrollRef}
      >
        {children}
      </div>
    </div>
  );
};

export default GeneralCarousel;
