import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { useFetchWishlistQuery } from "../APIs/Wishlist/wishingListAPI";
import { useAppDispatch } from "../hooks/hooks";
import { setCredentials } from "../features/wishList/wishListSlice";

// Define the type for the CartContext
interface WishListContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  isLoading: boolean;
  refetch: () => void;
}

// Create the context with an undefined default value
const WishListContext = createContext<WishListContextType | undefined>(undefined);

// Create a custom hook to access the CartContext
// eslint-disable-next-line react-refresh/only-export-components
export const useWishListContext = () => {
  const context = useContext(WishListContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

// CartProvider component that wraps the children
interface CartProviderProps {
  children: ReactNode;
}

export const WishListProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { data, error, isLoading, refetch } = useFetchWishlistQuery({});

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCredentials({...data}));
  }, [data, dispatch]);

  return (
    <WishListContext.Provider value={{ data, error, isLoading, refetch }}>
      {children}
    </WishListContext.Provider>
  );
};
