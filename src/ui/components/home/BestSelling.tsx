import { useEffect, useRef, useState } from "react";
import SecHeader from "../SecHeader";
import SecTitle from "../SecTitle";
import GeneralCarousel from "../GeneralCarousel";
import { useFetchAllProductsQuery } from "../../../APIs/Products/getProductsAPI";
import { Product } from "../../../constants/interfaces";
import ProductCard from "../ProductCard";
import ViewAllBtn from "../ViewAllBtn";
import LoadingScreen from "../LoadingScreen";
import NotFound from "../NotFound";

const BestSelling: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [bestSelling, setBestSelling] = useState<Product[]>([]);

  const { data, error, isLoading } = useFetchAllProductsQuery({
    page: 1,
    limit: 40,
  });
  // Effect to filter products on sale when data changes
  useEffect(() => {
    if (data && data.data.length > 0) {
      const bestSelling = [...data.data].sort((a, b) => b.sold - a.sold);
      setBestSelling(bestSelling);
    }
  }, [data]);

  if (isLoading) return <LoadingScreen />;

  if (error) return <NotFound />;

  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
      <SecHeader title="This Month" className="text-red-500" />
      <div className="flex items-center justify-between">
        <SecTitle title="Best Selling Products" />
        <ViewAllBtn title="View All" />
      </div>
      <GeneralCarousel scrollRef={scrollRef}>
        {bestSelling.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </GeneralCarousel>
    </div>
  );
};

export default BestSelling;
