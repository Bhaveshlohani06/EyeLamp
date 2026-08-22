import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

import Header from "./Header";
import Footer from "./Footer";
import FloatingSocials from "../components/FloatingSocials"; 

const Layout = ({
  children,
  title = "EYELAMP – Optical Showroom in Bahraich",
  description = "EYELAMP is a premium optical showroom in Bahraich, Uttar Pradesh offering computerized eye testing, spectacles, sunglasses, contact lenses, power lenses and budget-to-luxury frames.",
  keywords = "EYELAMP, optical showroom Bahraich, spectacles, sunglasses, contact lenses, power lenses, computerized eye testing, eyewear Bahraich",
  author = "EYELAMP",
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>

      <Header />
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />

      <main style={{ paddingTop: "76px" }}>{children}</main>

      <FloatingSocials />
      <Footer />
    </>
  );
};

export default Layout;
