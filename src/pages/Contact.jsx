import Layout from "../Layout/Layout";
import ContactSection from "../components/ContactSection";
import PageHeader from "../components/PageHeader";
import headerPhoto from "../assets/eye-camp-outdoor-checkup.jpg";

function Contact() {
  return (
    <Layout
      title="Contact EYELAMP – Optical Showroom in Bahraich"
      description="Get in touch with EYELAMP Optical Showroom in Bahraich, Uttar Pradesh. Call, WhatsApp, email or visit us for eye testing and eyewear."
    >
      <PageHeader
        eyebrow="Contact"
        title="We'd love to see you in Bahraich."
        image={headerPhoto}
        imageAlt="EYELAMP outdoor eye check-up camp"
      />

      <ContactSection />
    </Layout>
  );
}

export default Contact;
