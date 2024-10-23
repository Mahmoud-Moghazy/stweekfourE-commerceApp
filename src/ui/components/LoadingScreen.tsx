import images from "../../assets/images";
const LoadingScreen: React.FC = () => {
  return (
    <div className=" absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-white z-50">
      <img src={images.loading} alt="loading" className=" w-1/2 md:w-1/5"/>
    </div>
  );
};

export default LoadingScreen;
