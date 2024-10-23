import { useEffect, useState } from "react";
import { carouselItems } from "../../../constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000); // Slide change interval

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative w-full pt-4 lg:pt-10"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden md:h-80 lg:h-full">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute duration-700 ease-in-out w-full h-full bg-black px-3 md:px-10 lg:px-16 ${
              index === currentSlide ? "flex items-center" : "hidden"
            }`}
            data-carousel-item
          >
            <div className="text-white">
              <div className="flex items-center space-x-4 mb-5">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-2xl md:text-3xl lg:text-5xl"
                />
                <h2 className="text-sm">{item.title}</h2>
              </div>
              <p className="text-2xl md:text-3xl lg:text-5xl lg:leading-[60px] font-semibold max-w-[294px] mb-5">
                {item.description}
              </p>
              <div className=" flex items-center gap-3">
                <span className="border-b">Shop Now</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <img
              src={item.imageUrl}
              alt={`Slide ${index + 1}`}
              className="w-1/2"
            />
          </div>
        ))}
      </div>

      {/* Indicator Buttons */}
      <div className="absolute flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-red-500 border-2" : "bg-gray-500"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
