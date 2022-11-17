import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Where from "./pages/BusinessGuide/Where";
import How from "./pages/BusinessGuide/How";
import Why from "./pages/BusinessGuide/Why";
import Mainland from "./pages/Licensing/Mainland";
import FreeZone from "./pages/Licensing/FreeZone";
import OffShore from "./pages/Licensing/OffShore";
import Commericial from "./pages/Licensing/MainLand/Commericial";
import Etrade from "./pages/Licensing/MainLand/Etrade";
import Industrial from "./pages/Licensing/MainLand/Industrial";
import Professional from "./pages/Licensing/MainLand/Professional";
import Tourism from "./pages/Licensing/MainLand/Tourism";
import BusinessVisa from "./pages/Visa/BusinessVisa";
import InvestorVisa from "./pages/Visa/InvestorVisa";
import About from "./pages/About";
import Blog from "./pages/Blog";
import SocialBAr from "./components/SocialBAr";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialBAr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/where" element={<Where />} />
        <Route path="/how" element={<How />} />
        <Route path="/why" element={<Why />} />
        <Route path="/why" element={<Mainland />} />
        <Route path="/mainland" element={<Mainland />} />
        <Route path="/freezone" element={<FreeZone />} />
        <Route path="/offshore" element={<OffShore />} />
        <Route path="/commericial" element={<Commericial />} />
        <Route path="/etrade" element={<Etrade />} />
        <Route path="/industrial" element={<Industrial />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/businessvisa" element={<BusinessVisa />} />
        <Route path="/investorvisa" element={<InvestorVisa />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
