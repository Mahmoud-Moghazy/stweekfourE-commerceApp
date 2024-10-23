import { useFetchAllCategoriesQuery } from "../../../APIs/Categories/getCategoriesAPI";
import { Link } from "react-router-dom";
import LoadingScreen from "../LoadingScreen";
import NotFound from "../NotFound";

const CategoriesList: React.FC = () => {
  const { data, error, isLoading } = useFetchAllCategoriesQuery();

  if (isLoading) return <LoadingScreen />;

  if (error) return <NotFound />;

  return (
    <div className="hidden lg:block lg:border-r pt-4 lg:pt-10 lg:mr-10 lg:min-w-[217px]">
      <ul className="flex flex-wrap justify-stretch lg:flex-col lg:gap-y-2">
        {data?.map((category) => (
          <li key={category._id} className="basis-1/2 sm:basis-1/3">
            <Link
              to={`/category/${category._id}`}
              className="hover:bg-black hover:text-neutral-100 hover:p-2 transition-all duration-300 ease-in-out"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
