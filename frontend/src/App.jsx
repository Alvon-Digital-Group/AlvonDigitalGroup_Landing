
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agency />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/merci" element={<Thanks />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />  
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;