import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Contact = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      message: Yup.string().min(2, "Too Short").required("Required"),
    }),

    onSubmit: (values) => {
      console.log("form values", values);
      navigate("/");
    },
  });

  return (
    <div className="pt-32 py-20">
      <h1 className="text-3xl font-semibold text-white mb-4">
        {" "}
        <span className="text-pinkish">/</span>contact
      </h1>
      <p className="text-greyish">Interested! get in touch with me.</p>

      <div className="contact-content flex justify-between flex-col gap-10 sm:gap-5 sm:flex-row pt-14">
        <div className="left flex-1">
          <form onSubmit={formik.handleSubmit}>
            <div className="field-item mb-3">
              <label htmlFor="name" className="block text-pinkish text-lg mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                className="bg-greyish p-2 focus:outline-none w-full placeholder:text-blackish"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="text-red-300">
                {formik.errors.name && formik.touched.name
                  ? formik.errors.name
                  : ""}
              </p>
            </div>

            <div className="field-item mb-5">
              <label
                htmlFor="email"
                className="block text-pinkish text-lg mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                className="p-2 focus:outline-none w-full bg-greyish placeholder:text-blackish"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="text-red-300">
                {formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : ""}
              </p>
            </div>
            <div className="field-item mb-5">
              <label
                htmlFor="message"
                className="block text-pinkish text-lg mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter Your Message"
                className="p-2 focus:outline-none w-full bg-greyish placeholder:text-blackish"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p className="text-red-300">
                {formik.errors.message && formik.touched.message
                  ? formik.errors.message
                  : ""}
              </p>
            </div>

            <div className="field-item mt-5">
              <button
                type="submit"
                className="text-sm px-4 py-2 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-200"
              >
                Submit ~~&gt;
              </button>
            </div>
          </form>
        </div>
        <div className="right flex-1 sm:text-right">
          <div className="mxg-box inline-block border border-greyish p-4 mt-7 hover:bg-[#C778DD33]">
            <h3 className="text-white font-semibold mb-5">Message me here</h3>
            <a href="tel:923132005014" className="text-greyish block">
              + 92 313 200 5014
            </a>
            <a
              href="mailto:samiulhaq.dev@gmail.com"
              className="text-greyish block"
            >
              samiulhaq.dev@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
