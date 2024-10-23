import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchProductsByCategoryQuery } from "../../../APIs/Products/getProductsAPI";
import ComingSoon from "../ComingSoon";
import LoadingScreen from "../LoadingScreen";
import NotFound from "../NotFound";
import Card from "../wishingList/Card";

const ProductsByCategory: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useFetchProductsByCategoryQuery({
    categoryId: id,
  });
  if (data?.length === 0) return <ComingSoon />;
  if (isLoading) return <LoadingScreen />;
  if (error) return <NotFound />;
  return (
    <div className="container  py-9 md:py-14">
      <div className="text-sm font-medium flex gap-2 mb-9 md:mb-14">
        <Link to={"/home"} className="text-gray-500">
          Home
        </Link>
        <span>/</span>
        <span>Category:</span>
        <span className="text-red-500">{data && data[0]?.category?.name}</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data?.map((pro) => (
          <Card key={pro.id} {...pro} />
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;
