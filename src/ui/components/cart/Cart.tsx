import React from "react";
import EmptyCart from "./EmptyCart";
import LoadingScreen from "../LoadingScreen";
import { Link } from "react-router-dom";
import ItemRow from "./ItemRow";
import { useCartContext } from "../../../Context/CartContext";
import NotFound from "../NotFound";

interface Product {
  product: { _id: string; title: string; imageCover: string };
  price: number;
  count: number;
}

const Cart: React.FC = () => {
  const { data, error, isLoading } = useCartContext();

  if (isLoading) return <LoadingScreen />;

  if (!data || !data.data || data.data.products.length === 0)
    return <EmptyCart />;

  if (error) return <NotFound />;


  return (
    <section className="container py-9 md:py-14">
      <div className="text-sm font-medium flex gap-2 mb-9 md:mb-14">
        <Link to={"/home"} className="text-gray-500">
          Home
        </Link>
        <span>/</span>
        <span>Cart</span>
      </div>

      {/* Render cart items here */}
      <table className="w-full">
        <thead>
          <tr className="flex items-center px-2 py-3 shadow">
            <th scope="col" className="font-medium text-start w-1/4">
              Product
            </th>
            <th scope="col" className="font-medium text-center w-1/4">
              Price
            </th>
            <th scope="col" className="font-medium text-center w-1/4">
              Quantity
            </th>
            <th scope="col" className="font-medium text-end w-1/4">
              SubTotal
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.products.map(({ product, price, count }: Product) => (
            <ItemRow
              key={product._id}
              title={product.title.split(" ").slice(0, 2).join(" ")}
              imageCover={product.imageCover}
              price={price}
              count={count}
              productId={product._id}
            />
          ))}
        </tbody>
      </table>
      <div className="mb-20">
        <Link to={"/home"} className="border border-gray-500 rounded py-2 px-7">
          Return To Shop
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-5">
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-500 rounded p-2 placeholder:text-sm"
            placeholder="Coupon Code"
          />
          <button className="bg-red-500 text-white text-sm px-5 rounded cursor-not-allowed">
            Apply Coupon
          </button>
        </div>
        <div className="border-2 border-black rounded px-4 py-8 text-center w-full md:w-[470px]">
          <h6 className="font-medium text-start">Cart Total</h6>
          <div className="flex items-center justify-between border-b border-gray-500 py-3">
            <span>Subtotal:</span>
            <span>$ {data?.data?.totalCartPrice}</span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-500 py-3">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex items-center justify-between py-3 mb-6">
            <span>Total:</span>
            <span>$ {data?.data?.totalCartPrice}</span>
          </div>
          <Link to={'/checkout'} className="bg-red-500 text-white hover:bg-black transition-all duration-300 py-3 px-10 rounded">
            Process to checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
