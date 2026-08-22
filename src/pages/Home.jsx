import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

import Layout from "../Layout/Layout";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import EyewearCollection from "../components/EyewearCollection";
import EyeTestCTA from "../components/EyeTestCTA";
import EyeCampGallery from "../components/EyeCampGallery";
import FrameIllustration from "../components/FrameIllustration";

function Home() {
  return (
    <Layout
      title="EYELAMP – Optical Showroom in Bahraich | Eyewear, Lenses & Eye Testing"
      description="EYELAMP is a premium optical showroom in Bahraich offering computerized eye testing, spectacles, sunglasses, contact lenses and budget-to-luxury frames."
    >
      <Hero />

      <section className="section">
        <Container>
          <Row className="align-items-center gy-4">
            <Col lg={7} className="reveal">
              <span className="eyelamp-eyebrow mb-3 d-inline-flex">About EYELAMP</span>
              <h2 className="mb-3" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)" }}>
                Where advanced eye care meets modern fashion.
              </h2>
              <p className="eyelamp-lead mb-4">
                We are dedicated to providing you with the clearest vision
                through accurate, computerized eye testing by certified
                optometrists — paired with a vast collection of budget-friendly
                to luxury frames, durable lenses and stylish sunglasses.
              </p>
              <a href="/about" className="btn-outline-ink">
                Learn Our Story <FaArrowRight />
              </a>
            </Col>
            <Col lg={5} className="text-center reveal">
              <div className="d-flex justify-content-center gap-4 flex-wrap">
                <FrameIllustration style="round" width={120} />
                <FrameIllustration style="sun" width={120} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <ServicesGrid />
      <WhyChooseUs />
      <EyeCampGallery />
      <EyewearCollection />
      <EyeTestCTA />
    </Layout>
  );
}

export default Home;
