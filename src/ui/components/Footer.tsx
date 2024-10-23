import CardOne from "./footer/CardOne";
import CardTwo from "./footer/CardTwo";
import CardThree from "./footer/CardThree";
import CardFour from "./footer/CardFour";
import CardFive from "./footer/CardFive";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-b border-neutral-700 border-opacity-75">
      <div className="container py-5 md:py-8 lg:py-12 flex flex-col gap-y-4 md:flex-row md:flex-wrap md:justify-between">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardFive/>
      </div>
    </footer>
  );
};

export default Footer;
