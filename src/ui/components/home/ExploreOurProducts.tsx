import SecHeader from "../SecHeader";
import SecTitle from "../SecTitle";
import NavigationArrows from "../NavigationArrows";
import { useEffect, useRef, useState } from "react";
import { useFetchAllProductsQuery } from "../../../APIs/Products/getProductsAPI";
import { Product } from "../../../constants/interfaces";
import GeneralCarousel from "../GeneralCarousel";
import ProductCard from "../ProductCard";
import ViewAllBtn from "../ViewAllBtn";
import LoadingScreen from "../LoadingScreen";
import NotFound from "../NotFound";

const ExploreOurProducts: React.FC = () => {
  const electronicsRef = useRef<HTMLDivElement | null>(null);
  const fashionRef = useRef<HTMLDivElement | null>(null);

  const [electronics, setElectronics] = useState<Product[]>([]);
  const [fashion, setFashion] = useState<Product[]>([]);

  const { data, error, isLoading } = useFetchAllProductsQuery({ page: 1, limit: 40 });

  // Effect to filter when data changes
  useEffect(() => {
    if (data) {
      const electronics = data.data.filter(
        (item) => item.category?.name === "Electronics"
      );
      setElectronics(electronics);
      const fashion = data.data.filter(
        (item) => item.category?.name === "Men's Fashion"
      );
      setFashion(fashion);
    }
  }, [data]);

  if (isLoading) return <LoadingScreen />;

  if (error) return <NotFound />;

  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
      <SecHeader title="Our Products" className="text-red-500" />
      <div className="flex items-center justify-between">
        <SecTitle title="Explore Our Products" />
        <NavigationArrows scrollRefs={[electronicsRef, fashionRef]} />
      </div>
      <GeneralCarousel scrollRef={electronicsRef}>
        {electronics.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </GeneralCarousel>
      <GeneralCarousel scrollRef={fashionRef}>
        {fashion.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </GeneralCarousel>
      <div className="flex justify-center my-3">
        <ViewAllBtn title="View All Products" />
      </div>
    </div>
  );
};

export default ExploreOurProducts;
