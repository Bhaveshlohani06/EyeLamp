import { Container, Row, Col } from "react-bootstrap";
import { FiCheck } from "react-icons/fi";

// Placeholder photo — replace src/assets/founder-photo-placeholder.jpg
// with a real photo of Achintya Pandey (same filename, or update the
// import below) and it will appear here automatically, cropped to a circle.
import founderPhoto from "../assets/founder-photo-placeholder.jpg";

const OFFERINGS = [
  "Computerized eye testing by certified optometrists",
  "Wide selection of frames, from budget to premium",
  "Contact lenses for everyday and active wear",
  "Power lenses fitted to your exact prescription",
  "Sunglasses that protect as well as they style",
  "Blue-cut and anti-glare lens options",
  "Personalized, unhurried customer service",
];

function AboutSection() {
  return (
    <section className="section">
      <Container>
        <Row className="align-items-center gy-5">
          <Col lg={5} className="reveal">
            <span className="eyelamp-eyebrow mb-3 d-inline-flex">About EYELAMP</span>
            <h2 className="mb-4" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
              Eye care and eyewear, given the attention they deserve.
            </h2>
            <p className="eyelamp-lead mb-4">
              Welcome to EYELAMP, where advanced eye care meets modern
              fashion. We are dedicated to providing you with the clearest
              vision through accurate, computerized eye testing by certified
              optometrists. Choose from our vast collection of budget-friendly
              to luxury frames, durable lenses, and stylish sunglasses. Step
              in today for personalized service and a perfect fit for your
              eyes.
            </p>

            <div className="d-flex align-items-center gap-3 p-3 rounded-4" style={{ background: "var(--paper-dim)" }}>
              <img
                src="../public/images/founder.png"
                alt="Achintya Pandey, CEO and Founder of EYELAMP"
                className="founder-avatar"
              />
              <div>
                <div className="fw-semibold">Achintya Pandey</div>
                <div className="eyelamp-eyebrow" style={{ fontSize: "0.65rem" }}>CEO &amp; Founder</div>
              </div>
            </div>
          </Col>

          <Col lg={7} className="reveal">
            <Row className="g-3">
              {OFFERINGS.map((item) => (
                <Col xs={12} sm={6} key={item}>
                  <div className="d-flex align-items-start gap-2 p-3 h-100 rounded-4 bg-white border" style={{ borderColor: "var(--line)" }}>
                    <span
                      className="d-inline-flex align-items-center justify-content-center flex-shrink-0"
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "var(--brass)",
                        color: "var(--ink)",
                      }}
                    >
                      <FiCheck size={14} />
                    </span>
                    <span style={{ fontSize: "0.92rem", color: "var(--slate)" }}>{item}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
