import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./ui/pages/Home";
import About from "./ui/pages/About";
import Contact from "./ui/pages/Contact";
import SignUp from "./ui/components/authentication/SignUp";
import SignIn from "./ui/components/authentication/SignIn";
import UserProfile from "./ui/components/UserProfile";
import ProductDetails from "./ui/components/ProductDetails";
import Cart from "./ui/components/cart/Cart";
import RequireAuth from "./ui/components/authentication/RequireAuth";
import WishingList from "./ui/components/wishingList/WishingList";
import NotFound from "./ui/components/NotFound";
import ProductsByCategory from "./ui/components/product/ProductsByCategory";
import ProductsByBrand from "./ui/components/product/ProductsByBrand";
import AllProducts from "./ui/components/product/AllProducts";
import Checkout from "./ui/components/checkout/Checkout";
import AllOrders from "./ui/components/allOrders/AllOrders";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="allProducts" element={<AllProducts />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="productDetails/:id" element={<ProductDetails />} />
          <Route path="category/:id" element={<ProductsByCategory />} />
          <Route path="brand/:id" element={<ProductsByBrand />} />
          <Route path="*" element={<NotFound />} />
          {/* Protected Routs */}
          <Route element={<RequireAuth />}>
            <Route path="userProfile" element={<UserProfile />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishingList" element={<WishingList />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="allorders" element={<AllOrders />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
