import QuoteImage from "../assets/quote.png";
import InViewAnimate from "./InViewAnimate";

const QuoteImg = () => {
  return (
    <InViewAnimate>
      <div className="quote-image py-10">
        <img src={QuoteImage} alt="quote image" className="block mx-auto" />
      </div>
    </InViewAnimate>
  );
};

export default QuoteImg;
