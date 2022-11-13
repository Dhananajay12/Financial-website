import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Where from "./pages/Where";
import How from "./pages/How";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/where" element={<Where />} />
        <Route path="/how" element={<How />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
