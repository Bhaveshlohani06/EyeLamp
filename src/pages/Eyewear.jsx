import Layout from "../Layout/Layout";
import EyewearCollection from "../components/EyewearCollection";
import FrameShowcase from "../components/FrameShowcase";
import EyeTestCTA from "../components/EyeTestCTA";
import PageHeader from "../components/PageHeader";
import headerPhoto from "../assets/eye-camp-consultation-1.jpg";

function Eyewear() {
  return (
    <Layout
      title="Eyewear Collection – EYELAMP Optical Showroom Bahraich"
      description="Browse EYELAMP's eyewear collection: spectacles, sunglasses, contact lenses and power lenses, from budget-friendly to premium."
    >
      <PageHeader
        eyebrow="Eyewear Collection"
        title="Frames and lenses for every kind of vision."
        image={headerPhoto}
        imageAlt="EYELAMP eye check-up consultation"
      />

      <EyewearCollection />
      <FrameShowcase />
      <EyeTestCTA />
    </Layout>
  );
}

export default Eyewear;
