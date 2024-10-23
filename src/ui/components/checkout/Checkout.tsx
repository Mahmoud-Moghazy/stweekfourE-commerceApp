import React, { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCashOnDeliveryMutation,
  useCheckoutSessionMutation,
} from "../../../APIs/Orders/paymentAPI";
import NotFound from "../NotFound";
import images from "../../../assets/images";
import toast from "react-hot-toast";
import { useCartContext } from "../../../Context/CartContext";

interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
}
const address: ShippingAddress = {
  details: "",
  phone: "",
  city: "",
};

const Checkout: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "bank" | "">("");
  const { data, refetch } = useCartContext();
  const [shippingAddress, setShippingAddress] =
    useState<ShippingAddress>(address);

  const navigate = useNavigate();

  const cartId = data?.cartId;
  const products = data?.data?.products || [];
  const totalCartPrice = data?.data?.totalCartPrice || 0;

  const [
    checkoutSession,
    { isLoading: isCheckoutLoading, error: checkoutError },
  ] = useCheckoutSessionMutation();

  const [cashOnDelivery, { isLoading: isCODLoading, error: codError }] =
    useCashOnDeliveryMutation();

  const handleCheckoutPayment = async () => {
    try {
      const response = await checkoutSession({
        orderId: cartId,
        shippingAddress,
      }).unwrap();
      if (response.status === "success") {
        window.open(response.session.url);
        toast.success("Checkout session created successfully");
        navigate("/allorders");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      toast.error("Checkout session failed");
    }
  };

  const handleCODPayment = async () => {
    try {
      const response = await cashOnDelivery({
        orderId: cartId,
        shippingAddress,
      }).unwrap();
      if (response.status === "success") {
        toast.success("Order placed successfully");
        refetch();
        navigate("/allorders");
      }
    } catch (error) {
      console.error("Error during cash on delivery:", error);
      toast.error("Cash on delivery failed");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [name.toLowerCase()]: value,
    }));
  };

  const handlePlaceOrder = () => {
    if (
      !shippingAddress.details ||
      !shippingAddress.phone ||
      !shippingAddress.city
    ) {
      toast.error("Please fill in all fields");
    } else if (!paymentMethod) {
      toast.error("Please select a payment method");
    } else if (paymentMethod === "cash") {
      handleCODPayment();
    } else if (paymentMethod === "bank") {
      handleCheckoutPayment();
    }
  };

  if (checkoutError || codError) return <NotFound />;

  return (
    <div className="container py-9 md:py-14">
      <div className="text-sm font-medium flex gap-2 mb-9 md:mb-14">
        <Link to={"/home"} className="text-gray-500">
          Home
        </Link>
        <span>/</span>
        <span>Checkout</span>
      </div>
      <h2 className="text-2xl font-medium mb-8">Billing Details</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <form className="md:w-4/5">
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium mb-2">Details:</label>
              <input
                type="text"
                id="details"
                name="details"
                value={shippingAddress.details}
                onChange={handleChange}
                className="bg-neutral-100 rounded w-full p-2 text-sm"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium mb-2">Phone:</label>
              <input
                type="tel"
                id="Phone"
                name="Phone"
                value={shippingAddress.phone}
                onChange={handleChange}
                className="bg-neutral-100 rounded w-full p-2 text-sm"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium mb-2">City:</label>
              <input
                type="text"
                id="City"
                name="City"
                value={shippingAddress.city}
                onChange={handleChange}
                className="bg-neutral-100 rounded w-full p-2 text-sm"
              />
            </div>
          </form>
        </div>
        <div className="md:w-1/2 mt-6 flex flex-col gap-y-2">
          <div className="md:w-4/5 max-h-40 overflow-y-scroll hide-scrollbar">
            {products &&
              products?.map(
                (item: {
                  product: { id: string; imageCover: string; title: string };
                  price: number;
                }) => (
                  <div
                    className="flex items-center justify-between mb-4"
                    key={item.product.id}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.product.imageCover}
                        alt={item.product.title}
                        className="size-16"
                      />
                      <p>
                        {item?.product?.title?.split(" ").slice(0, 3).join(" ")}
                      </p>
                    </div>
                    <span>${item?.price}</span>
                  </div>
                )
              )}
          </div>
          <div className="md:w-4/5">
            <div className="flex items-center justify-between border-b border-gray-500 py-3">
              <span>Subtotal:</span>
              <span>$ {totalCartPrice}</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-500 py-3">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex items-center justify-between py-3 mb-6">
              <span>Total:</span>
              <span>$ {totalCartPrice}</span>
            </div>
          </div>
          <div className="md:w-4/5 mb-3">
            <div className="flex justify-between">
              <span className="flex items-center gap-2 ">
                <input
                  type="radio"
                  name="payment"
                  id="bank"
                  value="bank"
                  onClick={() => setPaymentMethod("bank")}
                  className="cursor-pointer accent-black"
                />
                <label htmlFor="bank" className="cursor-pointer">
                  Bank
                </label>
              </span>
              <div className="flex items-center gap-x-2">
                {images.bankCards.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="bank"
                    className="h-7 w-10 object-contain"
                  />
                ))}
              </div>
            </div>
            <span className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                id="cash"
                value="cash"
                onClick={() => setPaymentMethod("cash")}
                className="cursor-pointer accent-black"
              />
              <label htmlFor="cash" className="cursor-pointer">
                Cash on delivery
              </label>
            </span>
          </div>
          <div className="flex gap-3 mb-3">
            <input
              type="text"
              className="flex-grow border border-gray-500 rounded p-2 placeholder:text-sm"
              placeholder="Coupon Code"
            />
            <button className="bg-red-500 text-white text-sm px-10 rounded cursor-not-allowed">
              Apply Coupon
            </button>
          </div>
          <button
            className="bg-red-500 text-white font-medium py-3 rounded hover:bg-red-400"
            disabled={isCheckoutLoading || isCODLoading}
            onClick={handlePlaceOrder}
          >
            {isCheckoutLoading || isCODLoading ? "Loading..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
