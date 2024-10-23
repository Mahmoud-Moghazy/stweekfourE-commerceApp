import ServiceCard from "../ServiceCard";
import { services } from "../../../constants/constants";

const Services: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-y-5 md:gap-y-0">
      {services.map((item) => (
        <ServiceCard key={item.title} {...item} />
      ))}
    </div>
  );
};

export default Services;
