
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agency />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/merci" element={<Thanks />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;