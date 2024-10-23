import SecHeader from "../SecHeader";
import SecTitle from "../SecTitle";
import { newArrival } from "../../../constants/constants";
import ArrivalCard from "../ArrivalCard";

const NewArrival: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
      <SecHeader title="Featured" className="text-red-500"/>
      <SecTitle title="New Arrival" />

      <div className="flex items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          {newArrival.map((card, index) => (
            <ArrivalCard
              key={index}
              {...card}
              className={`${index === 0 && "md:col-span-2 lg:row-span-2"}
            ${index === 1 && "md:col-span-2"}
            ${
              index === 2 || index === 3
                ? "custom__shadow__two md:col-span-2 lg:col-span-1"
                : ""
            }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
