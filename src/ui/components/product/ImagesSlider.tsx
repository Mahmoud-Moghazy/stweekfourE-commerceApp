import React, { useEffect, useState } from "react";

interface Props {
  imageCover: string;
  thumbnails: Array<string>;
}

const ImagesSlider: React.FC<Props> = ({ imageCover, thumbnails }) => {
  const [mainImage, setMainImage] = useState(imageCover);

  useEffect(() => {
    setMainImage(imageCover);
  }, [imageCover]);

  return (
    <div className="flex gap-3 xl:gap-10 items-stretch h-[300px] md:h-[600px]">
      {/* Thumbnails */}
      <div className="flex flex-col gap-3 w-[130px] md:w-[170px] overflow-scroll hide-scrollbar">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`thumbnail ${index}`}
            onClick={() => setMainImage(thumbnail)}
            className="cursor-pointer w-full md:h-[140px] object-cover object-center shadow"
          />
        ))}
      </div>
      {/* Main Image */}
      <div className="w-[500px]">
        <img
          src={mainImage}
          alt="main product"
          className="w-full h-full object-cover object-center shadow"
        />
      </div>
    </div>
  );
};

export default ImagesSlider;
