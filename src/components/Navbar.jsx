import React, { useState } from "react";
import TopLogo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // const [show, setShow] = useState(false);

  return (
    <motion.div className="fixed top-0 left-0 right-0 bg-blackish"
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} transition={{
      duration: 0.2
  }}
    
    >
      <div className="max-container flex justify-between items-center py-4">
        <div className="left">
          <div className="img">
            <Link to="/" className="text-white font-bold">
              <img src={TopLogo} alt="logo" className="inline-block" /> SAMI
            </Link>
          </div>
        </div>
        <div className="right flex items-center">
          <ul
            className={`menu flex flex-col fixed justify-center w-full duration-300 h-full top-0 ${
              toggle ? "left-0" : "left-[-100%]"
            } bg-blackish md:flex-row md:static`}
          >
            <li className="text-[#ABB2BF] list-none text-[32px] md:text-base py-4 mx-4">
              <Link to="/">
                <span className="text-[#C778DD] font-medium">#</span>home
              </Link>
            </li>
            <li className="text-[#ABB2BF] list-none text-[32px] md:text-base py-4 mx-4">
              <a href="#">
                <span className="text-[#C778DD] font-medium">#</span>work
              </a>
            </li>
            <li className="text-[#ABB2BF] list-none text-[32px] md:text-base py-4 mx-4">
              <a href="#">
                <span className="text-[#C778DD] font-medium">#</span>about-me
              </a>
            </li>
            <li className="text-[#ABB2BF] list-none text-[32px] md:text-base py-4 mx-4">
              <Link to="/contact">
                <span className="text-[#C778DD] font-medium">#</span>contact
              </Link>
            </li>

            <div
              onClick={() => setToggle(false)}
              className="close group w-10 p-1 block absolute cursor-pointer top-5 right-5 md:hidden"
            >
              <span className="w-full h-[1px] rotate-45 block text-[#D9D9D9] bg-white group-hover:bg-pinkish"></span>
              <span className="w-full h-[1px] -rotate-45 block text-[#D9D9D9] bg-white group-hover:bg-pinkish"></span>
            </div>
          </ul>
          <div className="mobile-icon">
            <div
              onClick={() => setToggle((prev) => !prev)}
              className="open group block md:hidden w-10 cursor-pointer p-1"
            >
              <span className="w-full h-[1px] block my-2 bg-white group-hover:bg-pinkish"></span>
              <span className="w-full h-[1px] block my-2 bg-white group-hover:bg-pinkish"></span>
              <span className="w-full h-[1px] block my-2 bg-white group-hover:bg-pinkish"></span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
