import { Content } from "../../constants/interfaces";

const SecTitle: React.FC<Content> = ({ title, className }) => {
  return <h2 className={`font-semibold md:text-xl lg:text-4xl ${className}`}>{title}</h2>;
};

export default SecTitle;
