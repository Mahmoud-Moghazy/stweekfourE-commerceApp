import CategoriesList from "../components/home/CategoriesList";
import Carousel from "../components/home/Carousel";
import FlashSales from "../components/home/FlashSales";
import BrowseByCategory from "../components/home/BrowseByCategory";
import BestSelling from "../components/home/BestSelling";
import BrowseByBrand from "../components/home/BrowseByBrand";
import Jbl from "../components/home/Jbl";
import ExploreOurProducts from "../components/home/ExploreOurProducts";
import NewArrival from "../components/home/NewArrival";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <>
      <section className="container lg:flex flex-row-reverse">
        <Carousel />
        <CategoriesList />
      </section>
      <section className="container py-9 md:py-14 lg:mt-10 border-b">
        <FlashSales />
      </section>
      <section className="container py-9 md:py-14 border-b">
        <BrowseByCategory />
      </section>
      <section className="container py-9 md:py-14 border-b">
        <BrowseByBrand />
      </section>
      <section className="container py-9 md:py-14 border-b">
        <BestSelling />
      </section>
      <section className="container py-9 md:py-14">
        <Jbl />
      </section>
      <section className="container py-9 md:py-14">
        <ExploreOurProducts />
      </section>
      <section className="container py-9 md:py-14">
        <NewArrival />
      </section>
      <section className="container py-9 md:py-14 mb-24">
        <Services />
      </section>
    </>
  );
};

export default Home;
