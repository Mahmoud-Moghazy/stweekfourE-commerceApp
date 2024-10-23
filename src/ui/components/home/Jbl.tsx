import images from "../../../assets/images";

const jblImage = images.jbl;

const Jbl: React.FC = () => {
  return (
    <div className="p-4 md:p-0 md:px-14 flex items-center custom__shadow max-h-[500px] overflow-hidden">
      <div className="flex flex-col gap-y-2 lg:gap-y-6">
        <h3 className="text-green-500">Categories</h3>
        <p className="text-white lg:w-[443px] font-semibold lg:leading-[60px] md:text-3xl lg:text-5xl">
          Enhance Yor Music Experience
        </p>
        <div className="flex items-center gap-3 md:gap-5">
          <div className="size-10 md:size-14 lg:size-16 bg-neutral-100 rounded-full flex flex-col items-center justify-center">
            <p className="text-xs">05</p>
            <p className="text-xs">Days</p>
          </div>
          <div className="size-10 md:size-14 lg:size-16 bg-neutral-100 rounded-full flex flex-col items-center justify-center">
            <p className="text-xs">23</p>
            <p className="text-xs">Hours</p>
          </div>
          <div className="size-10 md:size-14 lg:size-16 bg-neutral-100 rounded-full flex flex-col items-center justify-center">
            <p className="text-xs">58</p>
            <p className="text-xs">Min</p>
          </div>
          <div className="size-10 md:size-14 lg:size-16 bg-neutral-100 rounded-full flex flex-col items-center justify-center">
            <p className="text-xs">46</p>
            <p className="text-xs">Sec</p>
          </div>
        </div>
        <button className="bg-green-500 text-neutral-100 px-4 py-1 lg:py-3 lg:px-10 rounded-sm w-fit">
          Buy Now
        </button>
      </div>
      <div className="">
        <img
          src={jblImage}
          alt="Jbl image"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Jbl;
