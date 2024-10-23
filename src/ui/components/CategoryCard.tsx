import { Link } from "react-router-dom";
import { CategoryCardProps } from "../../constants/interfaces";

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, _id }) => {
  return (
    <Link
      to={`/category/${_id}`}
      className="min-w-[170px] h-[145px] mr-3 flex flex-col items-center justify-center gap-y-3 hover:bg-red-500 hover:text-white border transition-all duration-500 ease-in-out"
    >
      <img src={image} alt={name} className="size-14" />
      {name}
    </Link>
  );
};

export default CategoryCard;
