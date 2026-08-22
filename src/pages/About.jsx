import Layout from "../Layout/Layout";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import EyeTestCTA from "../components/EyeTestCTA";
import EyeCampGallery from "../components/EyeCampGallery";
import PageHeader from "../components/PageHeader";
import headerPhoto from "../assets/eye-camp-consultation-2.jpg";

function About() {
  return (
    <Layout
      title="About EYELAMP – Optical Showroom in Bahraich"
      description="Learn about EYELAMP, a premium optical showroom in Bahraich founded by Achintya Pandey, offering computerized eye testing and a wide range of eyewear."
    >
      <PageHeader
        eyebrow="About Us"
        title="Advanced eye care meets modern fashion."
        image={headerPhoto}
        imageAlt="EYELAMP founder Achintya Pandey conducting an eye check-up"
      />

      <AboutSection />
      <EyeCampGallery />
      <WhyChooseUs />
      <EyeTestCTA />
    </Layout>
  );
}

export default About;
