// import { Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Eyewear from "./pages/Eyewear";
// import Contact from "./pages/Contact";

// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
//   }, [pathname]);
//   return null;
// }

// function App() {
//   return (
//     <>
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/eyewear" element={<Eyewear />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<Home />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Eyewear from "./pages/Eyewear";
import Contact from "./pages/Contact";
import WhatsAppPopup from "./components/WhatsappPopup";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/eyewear" element={<Eyewear />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      
      {/* WhatsApp Popups - Only show on all pages */}
      <WhatsAppPopup />
      <FloatingWhatsApp />
    </>
  );
}

export default App;