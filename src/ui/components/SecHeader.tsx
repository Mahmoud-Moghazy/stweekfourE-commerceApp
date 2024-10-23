import { Content } from "../../constants/interfaces";

const SecHeader: React.FC<Content> = ( {title, className} ) => {
  return (
    <div className="flex items-center gap-x-4">
      <div className="w-3 h-6 md:w-5 md:h-10 rounded-sm bg-red-500"></div>
      <p className={`font-semibold ${className}`}>{title}</p>
    </div>
  );
};

export default SecHeader;
