import QuoteImage from "../assets/quote.png";

const QuoteImg = () => {
  return (
    <div className="quote-image py-10">
        <img src={QuoteImage} alt="quote image" className="block mx-auto"/>
    </div>
  )
}

export default QuoteImg;