import banner from "../assets/Banner.svg";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <div>
          <img src={banner} alt="Banner" className="" />
        </div>
        <div className="absolute top-48 text-white max-[480px]:top-5">
          <div className="text-5xl font-medium mx-52 max-[480px]:text-sm max-[480px]:mx-5 max-[480px]:mt-12">Discover Exciting Events Happening Near You - Stay Tuned for Updates!</div>
          <div className="mx-56 mt-16 text-xl max-[480px]:text-sm max-[480px]:mx-0 max-[480px]:hidden">
          Dorem ipsum dolor sir amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdun, ac aliquet odio mattis. Class aptent taciti sociosqu ad torquent per conubia nostra, per
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
