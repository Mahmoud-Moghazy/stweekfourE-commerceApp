import { useRef } from "react";
import { useFetchAllBrandsQuery } from "../../../APIs/Brands/getBrandsAPI";
import SecHeader from "../SecHeader";
import SecTitle from "../SecTitle";
import NavigationArrows from "../NavigationArrows";
import GeneralCarousel from "../GeneralCarousel";
import LoadingScreen from "../LoadingScreen";
import NotFound from "../NotFound";
import BrandCard from "../BrandCard";

const BrowseByBrand: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { data, error, isLoading } = useFetchAllBrandsQuery();

  if (isLoading) return <LoadingScreen />;

  if (error) return <NotFound />;
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
      <SecHeader title="Brand" className="text-red-500" />
      <div className="flex items-center justify-between">
        <SecTitle title="Browse By Brand" />
        <NavigationArrows scrollRefs={[scrollRef]} />
      </div>
      <GeneralCarousel scrollRef={scrollRef}>
        {data?.map((brand) => (
          <BrandCard key={brand._id} {...brand} />
        ))}
      </GeneralCarousel>
    </div>
  );
};

export default BrowseByBrand;
