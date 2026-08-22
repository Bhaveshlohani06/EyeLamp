import Layout from "../Layout/Layout";
import ServicesGrid from "../components/ServicesGrid";
import EyeTestCTA from "../components/EyeTestCTA";
import PageHeader from "../components/PageHeader";
import headerPhoto from "../assets/eye-camp-pharmacy-visit.jpg";

function Services() {
  return (
    <Layout
      title="Services – EYELAMP Optical Showroom Bahraich"
      description="Explore EYELAMP's services: computerized eye testing, power lenses, contact lenses, spectacles, sunglasses, blue-cut and anti-glare lenses, and premium & budget frames."
    >
      <PageHeader
        eyebrow="Our Services"
        title="Everything your eyes need, under one roof."
        image={headerPhoto}
        imageAlt="EYELAMP optometrist consulting a patient"
      />

      <ServicesGrid intro={false} />
      <EyeTestCTA />
    </Layout>
  );
}

export default Services;
