import React, { useEffect, useState } from "react";
import { useWishListContext } from "../../../Context/WishListContext";
import ProductCard from "./ProductCard";
import Card from "./Card";
import { JSX } from "react/jsx-runtime";
import { Product, ProductCardProps } from "../../../constants/interfaces";
import LoadingScreen from "../LoadingScreen";
import EmptyWishList from "./EmptyWishList";
import SecHeader from "../SecHeader";
import { useFetchAllProductsQuery } from "../../../APIs/Products/getProductsAPI";
import NotFound from "../NotFound";

const WishingList: React.FC = () => {
  const { data, isLoading, error } = useWishListContext();
  const [electronics, setElectronics] = useState<Product[]>([]);

  const { data: products } = useFetchAllProductsQuery({ page: 1, limit: 40 });

  // Effect to filter when data changes
  useEffect(() => {
    if (products) {
      const electronics = products.data.filter(
        (item) => item.category?.name === "Electronics"
      );
      setElectronics(electronics);
    }
  }, [products]);
  if (!data || !data?.data || data?.data.length === 0) return <EmptyWishList />;

  if (isLoading) return <LoadingScreen />;

  if (error) return <NotFound />;
  return (
    <section className="container py-9 md:py-14">
      <p className="font-medium mb-9 md:mb-14">
        Wishlist ({data?.data.length})
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-9 md:mb-14">
        {data &&
          data?.data.map((pro: JSX.IntrinsicAttributes & ProductCardProps) => (
            <ProductCard key={pro.id} {...pro} />
          ))}
      </div>
      <SecHeader title="Just For You" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-9 md:my-14">
        {electronics.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default WishingList;
