import AboutImage from "../assets/sami-profile.webp";

const AboutHome = () => {
  return (
    <div className="about-home py-10">
      <div className="title-header flex items-center justify-between">
        <div className="left flex items-center flex-1 gap-5">
          <h2 className="text-white font-medium text-[32px]">
            <span className="text-pinkish">#</span>about-me
          </h2>
          <span className="line block w-1/2 h-px bg-[#C778DD]"></span>
        </div>
      </div>
      <div className="about-content flex flex-col-reverse justify-center items-center pt-14 lg:flex-row">
        <div className="about-left flex-1">
            <h2 className="text-pinkish font-semibold mb-6 text-2xl">Hi, I'm Sami!</h2>
          <p className="text-greyish mb-10">
            As a Frontend Developer with 2.5 years of experience, I have honed
            my skills in developing dynamic and user-friendly web applications
            that are visually appealing and optimized for performance. With a
            passion for coding and a keen eye for design, I excel at using HTML,
            CSS, JavaScript, and frontend frameworks such as React and Nextjs. I
            have extensive experience in developing custom themes for WordPress
            and using popular WordPress builders such as Elementor, WpBakery,
            and Divi to create responsive and engaging web interfaces.
            <br />
            <br />
            My experience includes working on a range of projects, from building
            landing pages to developing complex web applications and
            collaborating with cross-functional teams to deliver high-quality
            results that meet & exceed client expectations.
          </p>

          <button className="text-sm px-4 py-2 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-200">
            Read More ~~&gt;
          </button>
        </div>
        <div className="about-right flex-1">
          <img src={AboutImage} alt="about image" className="w-[90%] lg:w-[80%] mb-14 mx-auto lg:mb-0" />
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
