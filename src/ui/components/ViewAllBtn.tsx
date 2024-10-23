import { Link } from "react-router-dom";
import { Content } from "../../constants/interfaces";

const ViewAllBtn: React.FC<Content> = ({ title, className }) => {
  return (
    <Link to={'/allProducts'}
      className={`w-fit bg-red-500 text-white py-3 px-9 rounded-md hover:bg-white hover:text-red-500 hover:border hover:border-red-500 transition-all duration-500 ease-in-out ${className}`}
    >
      {title}
    </Link>
  );
};

export default ViewAllBtn;
