import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  useFetchProductsByCategoryQuery,
  useFetchProductByIdQuery,
} from "../../APIs/Products/getProductsAPI";
import LoadingScreen from "./LoadingScreen";
import ImagesSlider from "./product/ImagesSlider";
import ProductInfo from "./product/ProductInfo";
import BuyNowBtn from "./product/BuyNowBtn";
import AddToWishingList from "./AddToWishingList";
import ProductFooter from "./product/ProductFooter";
import SecHeader from "./SecHeader";
import ProductCard from "./ProductCard";
import NotFound from "./NotFound";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Fetch product details by ID
  const {
    data: product,
    error: productError,
    isLoading: productLoading,
  } = useFetchProductByIdQuery(id as string);
  // Fetch related products by category (only if the product data is available)
  const {
    data: relatedProducts,
    error: relatedProductsError,
    isLoading: relatedProductsLoading,
  } = useFetchProductsByCategoryQuery(
    product?.category ? { categoryId: product.category._id } : {}
  );

  if (productLoading || relatedProductsLoading) return <LoadingScreen />;
  if (productError || relatedProductsError) return <NotFound />;

  return (
    <section className="container py-9 md:py-14">
      <div className="text-sm font-medium flex gap-2 mb-9 md:mb-14">
        <Link to={"/home"} className="text-gray-500">
          Home
        </Link>
        <span>/</span>
        <Link
          to={`/category/${product?.category?._id}`}
          className="text-gray-500"
        >
          {product?.category?.name}
        </Link>
        <span>/</span>
        <span>{product?.title.split(" ").slice(0, 3).join(" ")}</span>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row xl:gap-0 md:justify-between mb-16">
        {product && (
          <ImagesSlider
            imageCover={product?.imageCover}
            thumbnails={product?.images}
          />
        )}
        <div>
          {product && <ProductInfo {...product} />}
          <div className="flex justify-between my-4">
            <BuyNowBtn />
            <div>
              {product && (
                <AddToWishingList id={product?.id} className="rounded-none" />
              )}
            </div>
          </div>
          <ProductFooter />
        </div>
      </div>
      <div>
        {relatedProducts && relatedProducts?.length > 0 && (
          <SecHeader title="Related Items" />
        )}
      </div>
      <div className="flex overflow-x-scroll hide-scrollbar snap-x my-10">
        {relatedProducts &&
          relatedProducts.map((pro) => <ProductCard key={pro.id} {...pro} />)}
      </div>
    </section>
  );
};

export default ProductDetails;
