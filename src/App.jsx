import { Route, Router, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-blackish">
      <div className="max-w-[1200px] m-auto px-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
