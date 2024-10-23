import { Outlet } from "react-router-dom";
import Navbar from "./ui/components/Navbar";
import Footer from "./ui/components/Footer";
import TopHeader from "./ui/components/TopHeader";
import Copyright from "./ui/components/Copyright";

const Layout = () => {
  return (
    <>
      <TopHeader />
      <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <div>
          <Footer />
          <Copyright />
        </div>
      </div>
    </>
  );
};

export default Layout;
