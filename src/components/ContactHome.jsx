
const ContactHome = () => {
  return (
    <div className="contact-home pt-10 md:pt-20 pb-20">
      <div className="title-header flex items-center justify-between">
        <div className="left flex items-center flex-1 gap-5">
          <h2 className="text-white font-medium text-[32px]">
            <span className="text-pinkish">#</span>contact
          </h2>
          <span className="line block w-1/2 h-px bg-[#C778DD]"></span>
        </div>
      </div>
      <div className="contact-content flex justify-between flex-col gap-10 sm:gap-5 sm:flex-row pt-14">
        <div className="left flex-1">
          <p className="text-greyish">I'm interested in freelance opportunities.<br/><br/> However if you have any other requests, don't hesitate to contact me</p>
        </div>
        <div className="right flex-1 sm:text-right">
          <div className="mxg-box inline-block border border-greyish p-4 hover:bg-[#C778DD33]">
              <h3 className="text-white font-semibold mb-5">Message me here</h3>
              <a href="tel:923132005014" className="text-greyish block">+ 92 313 200 5014</a>
              <a href="mailto:samiulhaq.dev@gmail.com" className="text-greyish block">samiulhaq.dev@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
