import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { useFetchCartQuery } from "../APIs/Cart/cartAPI";
import { useAppDispatch } from "../hooks/hooks";
import { setCredentials } from "../features/cart/cartSlice";

// Define the type for the CartContext
interface CartContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  isLoading: boolean;
  refetch: () => void;
}

// Create the context with an undefined default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a custom hook to access the CartContext
// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

// CartProvider component that wraps the children
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { data, error, isLoading, refetch } = useFetchCartQuery({});
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCredentials({...data}));
  }, [data, dispatch]);

  return (
    <CartContext.Provider value={{ data, error, isLoading, refetch }}>
      {children}
    </CartContext.Provider>
  );
};
