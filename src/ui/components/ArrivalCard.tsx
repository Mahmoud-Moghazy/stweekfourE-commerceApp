import React from 'react'
interface CardProps {
  className?: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
}

const ArrivalCard: React.FC<CardProps> = ({ title, description, image, buttonText, className }) => {

  return (
    <div className={`bg-black text-white rounded-sm overflow-hidden shadow-lg relative flex ${className}`}>
      <img src={image} alt={title} className={title.startsWith("PlayStation") ? "mt-auto": title.startsWith("Women") ? "ms-auto" : ""}/>
      <div className=" absolute start-5 bottom-5 lg:start-7 lg:bottom-7">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="mb-4 text-sm max-w-60">{description}</p>
        <button className="border-b">{buttonText}</button>
      </div>
    </div>
  );
};

export default ArrivalCard;