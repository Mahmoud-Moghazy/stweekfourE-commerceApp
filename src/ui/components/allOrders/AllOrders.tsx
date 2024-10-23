import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetchUserOrdersMutation } from "../../../APIs/Orders/userOrdersAPI";
import { useAppSelector } from "../../../hooks/hooks";
import { RootState } from "../../../store/store";
import { jwtDecode, JwtPayload } from "jwt-decode"; // Import JwtPayload for typing
import LoadingScreen from "../LoadingScreen";
import NotFound from "../NotFound";
import ItemCard from "./itemCard";
import { Product } from "../../../constants/interfaces";

interface MyJwtPayload extends JwtPayload {
  id?: string;
}

interface OrderData {
  createdAt: string;
  id: string;
  user: {
    email: string;
    name: string;
    phone: string;
    _id: string;
  };
  paymentMethodType: string;
  totalOrderPrice: number;
  cartItems: Array<Product>;
}

const AllOrders: React.FC = () => {
  const [decodedToken, setDecodedToken] = useState<MyJwtPayload | null>(null);
  const [userId, setUserId] = useState<string>("");
  const token = useAppSelector((state: RootState) => state.auth.token);

  const [fetchUserOrders, { data, error, isLoading }] =
    useFetchUserOrdersMutation();

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode<MyJwtPayload>(token);
      setDecodedToken(decoded);
    }
  }, [token]);

  useEffect(() => {
    if (decodedToken && decodedToken.id) {
      setUserId(decodedToken.id);
    }
  }, [decodedToken]);

  useEffect(() => {
    if (userId) {
      fetchUserOrders({ userId });
    }
  }, [userId, fetchUserOrders]);

  if (isLoading) return <LoadingScreen />;
  if (error) return <NotFound />;

  console.log(data);

  return (
    <section className="container py-9 md:py-14">
      <div className="text-sm font-medium flex gap-2 mb-9 md:mb-14">
        <Link to={"/home"} className="text-gray-500">
          Home
        </Link>
        <span>/</span>
        <span>Your Orders</span>
      </div>
      {data && data.length === 0 && <p>No orders found.</p>}

      {data &&
        data.map((item: OrderData, i: React.Key) => (
          <ItemCard key={i} {...item} />
        ))}
    </section>
  );
};

export default AllOrders;
