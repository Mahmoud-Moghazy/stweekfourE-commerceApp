import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./Context/CartContext.tsx";
import { WishListProvider } from "./Context/WishListContext.tsx";

// Render the app
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <CartProvider>
        <WishListProvider>
          <Toaster />
          <App />
        </WishListProvider>
      </CartProvider>
    </Provider>
  </StrictMode>
);
