import { useRef } from "react";
import SecHeader from "../SecHeader";
import SecTitle from "../SecTitle";
import GeneralCarousel from "../GeneralCarousel";
import CategoryCard from "../CategoryCard";
import NavigationArrows from "../NavigationArrows";
import { useFetchAllCategoriesQuery } from "../../../APIs/Categories/getCategoriesAPI";
import LoadingScreen from "../LoadingScreen";
import NotFound from "../NotFound";

const BrowseByCategory: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { data, error, isLoading } = useFetchAllCategoriesQuery();

  if (isLoading) return <LoadingScreen />;

  if (error) return <NotFound />;

  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
      <SecHeader title="Category" className="text-red-500" />
      <div className="flex items-center justify-between">
        <SecTitle title="Browse By Category" />
        <NavigationArrows scrollRefs={[scrollRef]} />
      </div>
      <GeneralCarousel scrollRef={scrollRef}>
        {data?.map((category) => (
          <CategoryCard key={category._id} {...category} />
        ))}
      </GeneralCarousel>
    </div>
  );
};

export default BrowseByCategory;
