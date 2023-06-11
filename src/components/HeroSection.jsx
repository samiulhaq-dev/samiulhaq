import HeroImg from "../assets/sami-profile.webp";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-center justify-between items-center flex-wrap flex-col md:flex-row gap-10">
      <div className="left flex-1 mt-28 md:mt-0">
        <h1 className="font-bold text-[35px] md:text-[45px] leading-tight text-white">
          Sami is a <br />
          <span className="text-pinkish"> Front-end Developer</span>
        </h1>
        <p className="text-[#ABB2BF] my-6">
          He crafts responsive websites where technologies meet creativity
        </p>
        <a href="mailto:samiulhaq.dev@gmail.com">
        <button className="text-white font-medium px-4 py-2 cursor-pointer duration-200 border border-pinkish hover:bg-[#C778DD33]">
          Contact Me!!
        </button>
        </a>
      </div>
      <div className="right flex-1 flex flex-col justify-center items-center">
        <div className="img mt-10">
          <img src={HeroImg} alt="hero image" className="block mx-auto w-full md:w-[400px] h-auto px-5 md:px-2" />
        </div>

        <div className="border border-greyish p-2 text-greyish flex items-center gap-2">
          <div className="w-4 h-4 bg-pinkish"></div>
          <p>
            Currently working on <span className="text-white">Portfolio</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
