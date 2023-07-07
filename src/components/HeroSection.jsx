import HeroImg from "../assets/sami-profile.webp";
import { motion } from "framer-motion";
import AnimateOpacity from "./AnimateOpacity";

const HeroSection = () => {
  return (
    <motion.div className="min-h-screen flex flex-center justify-between items-center flex-wrap flex-col md:flex-row gap-10">
      <div className="left flex-1 mt-28 md:mt-0">
        <AnimateOpacity>
          <h1 className="font-bold text-[35px] md:text-[45px] leading-tight text-white">
            Sami is a <br />
            <span className="text-pinkish"> Front-end Developer</span>
          </h1>
        </AnimateOpacity>
        <AnimateOpacity>
          <p className="text-[#ABB2BF] my-6">
            He crafts responsive websites where technologies meet creativity
          </p>
        </AnimateOpacity>
        <AnimateOpacity>
          <a href="mailto:samiulhaq.dev@gmail.com">
            <button className="text-white font-medium px-4 py-2 cursor-pointer duration-200 border border-pinkish hover:bg-[#C778DD33]">
              Contact Me!!
            </button>
          </a>
        </AnimateOpacity>
      </div>
      <div className="right flex-1 flex flex-col justify-center items-center">
        <motion.div
          className="img mt-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={HeroImg}
            alt="hero image"
            className="block mx-auto w-full md:w-[400px] h-auto px-5 md:px-2"
          />
        </motion.div>

        <AnimateOpacity>
          <div className="border border-greyish p-2 text-greyish flex items-center gap-2">
            <div className="w-4 h-4 bg-pinkish"></div>
            <p>
              Currently working on <span className="text-white">Portfolio</span>{" "}
            </p>
          </div>
        </AnimateOpacity>
      </div>
    </motion.div>
  );
};

export default HeroSection;
