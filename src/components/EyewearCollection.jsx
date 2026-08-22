import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

import FrameIllustration from "./FrameIllustration";

const COLLECTION = [
  {
    name: "Spectacles",
    desc: "Everyday and statement frames for a look that's entirely yours.",
    frame: "round",
    msg: "Hello EYELAMP, I would like to know more about your spectacles collection.",
  },
  {
    name: "Sunglasses",
    desc: "UV-conscious styles that pair protection with personality.",
    frame: "sun",
    msg: "Hello EYELAMP, I would like to know more about your sunglasses collection.",
  },
  {
    name: "Contact Lenses",
    desc: "Comfortable lenses for daily wear, sport and special occasions.",
    frame: "square",
    msg: "Hello EYELAMP, I am interested in contact lenses.",
  },
  {
    name: "Power Lenses",
    desc: "Prescription-accurate lenses fitted to the frame you choose.",
    frame: "round",
    msg: "Hello EYELAMP, I would like to know more about power lenses.",
  },
];

function EyewearCollection() {
  return (
    <section className="section section-dark">
      <Container>
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 620 }}>
          <span className="eyelamp-eyebrow mb-3 d-inline-flex justify-content-center">
            Eyewear Collection
          </span>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
            Spectacles, sunglasses, lenses — curated for every eye.
          </h2>
        </div>

        <Row className="g-4">
          {COLLECTION.map((item) => (
            <Col md={6} lg={3} key={item.name}>
              <div className="eyewear-card">
                <div className="frame-illustration">
                  <FrameIllustration style={item.frame} width={90} color="#7c8c4a" />
                </div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="d-flex flex-wrap gap-2">
                  <a href="/eyewear" className="btn-outline-ink" style={{ padding: "0.5rem 1.1rem", fontSize: "0.85rem" }}>
                    View Collection
                  </a>
                  <a
                    href={`https://wa.me/918081971058?text=${encodeURIComponent(item.msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-brass"
                    style={{ padding: "0.5rem 1.1rem", fontSize: "0.85rem" }}
                  >
                    <FaWhatsapp /> Enquire
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default EyewearCollection;
