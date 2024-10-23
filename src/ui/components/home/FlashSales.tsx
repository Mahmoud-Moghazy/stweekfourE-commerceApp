import { useRef, useState, useEffect } from "react";
import GeneralCarousel from "../GeneralCarousel";
import SecHeader from "../SecHeader";
import SecTitle from "../SecTitle";
import Timer from "../Timer";
import { useFetchAllProductsQuery } from "../../../APIs/Products/getProductsAPI";
import ProductCard from "../ProductCard";
import { Product } from "../../../constants/interfaces";
import NavigationArrows from "../NavigationArrows";
import ViewAllBtn from "../ViewAllBtn";
import LoadingScreen from "../LoadingScreen";
import NotFound from "../NotFound";

const FlashSales: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [productsOnSale, setProductsOnSale] = useState<Product[]>([]);

  const { data, error, isLoading } = useFetchAllProductsQuery({ page: 1, limit: 20 });

  // Effect to filter products on sale when data changes
  useEffect(() => {
    if (data) {
      const onSale = data.data.filter((item) => item.priceAfterDiscount);
      setProductsOnSale(onSale);
    }
  }, [data]); // Run this effect whenever `data` changes

  if (isLoading) return <LoadingScreen />;

  if (error) return <NotFound />;

  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
      <SecHeader title="Today's" className="text-red-500" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-5 md:gap-x-7 lg:gap-20">
          <SecTitle title="Flash Sales" />
          <Timer />
        </div>
        <NavigationArrows scrollRefs={[scrollRef]} />
      </div>
      <GeneralCarousel scrollRef={scrollRef}>
        {productsOnSale.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </GeneralCarousel>
      <div className="flex justify-center my-3">
        <ViewAllBtn title="View All Products" />
      </div>
    </div>
  );
};

export default FlashSales;
