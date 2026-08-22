import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { FiEye, FiAward, FiMapPin, FiUsers } from "react-icons/fi";

import heroPhoto from "../assets/eye-camp-outdoor-checkup.jpg";

const WHATSAPP_MSG = encodeURIComponent("Hello EYELAMP, I would like to book an eye test.");

const FEATURES = [
  { icon: <FiEye />, label: "Computerized Eye Testing" },
  { icon: <FiAward />, label: "Certified Optometrists" },
  { icon: <FiUsers />, label: "Personalized Fitting" },
  { icon: <FiMapPin />, label: "Showroom in Bahraich" },
];

function Hero() {
  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroPhoto})` }}
        role="img"
        aria-label="EYELAMP optometrist conducting an eye check-up"
      />
      <div className="hero-bg-overlay" />

      <Container className="position-relative">
        <Row className="align-items-center gy-5">
          <Col lg={7} className="reveal">
            <span className="hero-badge mb-4 d-inline-flex">
              <FiEye /> Optical Showroom · Bahraich, UP
            </span>

            <h1 className="hero-title mb-4">
              See Better.
              <br />
              <em>Look Better.</em>
            </h1>

            <p className="eyelamp-lead mb-4">
              Advanced eye care, premium eyewear and modern style — all under
              one roof. Step into EYELAMP for accurate computerized eye
              testing and a frame that's truly your fit.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a
                href={`https://wa.me/918081971058?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brass"
              >
                <FaWhatsapp /> Book an Eye Test
              </a>
              <a href="/eyewear" className="btn-outline-ink">
                Explore Eyewear <FaArrowRight />
              </a>
            </div>
          </Col>

          <Col lg={5} className="reveal">
            <div className="hero-visual">
              <div className="rx-card">
                <div className="eyelamp-eyebrow mb-2" style={{ color: "var(--brass)" }}>
                  Vision Check
                </div>
                <div className="rx-row">
                  <span>Eye Testing</span>
                  <span>Computerized</span>
                </div>
                <div className="rx-row">
                  <span>Optometrist</span>
                  <span>Certified</span>
                </div>
                <div className="rx-row">
                  <span>Frames</span>
                  <span>Budget → Premium</span>
                </div>
                <div className="rx-row">
                  <span>Lenses</span>
                  <span>Blue Cut / Anti-Glare</span>
                </div>
                <div className="rx-row">
                  <span>Fit</span>
                  <span>Personalized</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="stat-strip mt-5">
        <Container>
          <Row className="gy-3">
            {FEATURES.map((f) => (
              <Col key={f.label} xs={6} md={3} className="stat-item">
                <div className="mb-1" style={{ color: "var(--brass)", fontSize: "1.3rem" }}>
                  {f.icon}
                </div>
                <div className="stat-label">{f.label}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
