import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="container py-9 md:py-14">
      <div className="text-sm font-medium flex gap-2 mb-9 md:mb-14">
        <Link to={"/home"} className="text-gray-500">
          Home
        </Link>
        <span>/</span>
        <span>404 Error</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 py-20 h-full">
        <span className="font-medium text-5xl md:text-7xl lg:text-[110px]">
          404 Not Found
        </span>
        <span className="text-sm md:text-base">
          Your visited page not found. You may go home page.
        </span>
        <Link to={"/home"} className="bg-red-500 text-white py-2 px-10 rounded">Back to home page</Link>
      </div>
    </div>
  );
};

export default NotFound;
