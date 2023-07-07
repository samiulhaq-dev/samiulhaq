import { useInView } from "framer-motion";
import { useRef } from "react";

const InViewAnimate = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateY(50px)",
        transition: "all 0.5s ease",
      }}
    >
      {children}
    </div>
  );
};

export default InViewAnimate;
