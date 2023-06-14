import Logo from "../assets/logo.png";
import Facebook from "../assets/Figma.png";
import Github from "../assets/Github.png";

const Footer = () => {
  return (
    <div className="footer py-8 border-t border-greyish pt-10">
      <div className="footer-content flex justify-between flex-col gap-10 sm:flex-row">
        <div className="left">
          <img src={Logo} alt="logo" className="inline-block mr-2" />
          <span className="font-bold text-white">Sami ul Haq</span>
          <p className="text-white mt-3">
            Front-end developer based in Pakistan.
          </p>
        </div>
        <div className="right">
          <h4 className="font-bold text-white">Social Media</h4>

          <div className="social-media flex">
            <a href="https://web.facebook.com/sami.ul.haq.2017" target="_blank">
              <img src={Facebook} alt="facebook logo" />
            </a>
            <a href="https://github.com/sami-ul-haq" target="_blank">
              <img src={Github} alt="Github logo" />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright mt-14">
        <p className="text-greyish text-center">
          @ Copyright 2023. Made by{" "}
          <span className="text-pinkish font-semibold"> Sami ul Haq</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
