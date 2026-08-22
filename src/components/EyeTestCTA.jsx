import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_MSG = encodeURIComponent("Hello EYELAMP, I would like to book an eye test.");

function EyeTestCTA() {
  return (
    <section className="section">
      <Container>
        <div className="eyetest-cta">
          <Row className="align-items-center position-relative gy-4">
            <Col lg={8}>
              <span className="eyelamp-eyebrow mb-3 d-inline-flex" style={{ color: "var(--brass)" }}>
                Eye Testing
              </span>
              <h2 className="mb-3" style={{ color: "var(--paper)", fontSize: "clamp(1.8rem, 3.4vw, 2.4rem)" }}>
                Your Vision Deserves the Best Care.
              </h2>
              <p className="eyelamp-lead">
                Get accurate computerized eye testing and find the right
                vision solution for you — guided by certified optometrists.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <a
                href={`https://wa.me/918081971058?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brass"
              >
                <FaWhatsapp /> Book Your Eye Test
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default EyeTestCTA;
