import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

import FrameIllustration from "./FrameIllustration";

// Original line-art frames — no brand names, no logos. Rotation values give
// each card a distinct "angle" while staying true to the actual frame shape.
const FRAMES = [
  { style: "round", name: "Round Frame", tilt: -6 },
  { style: "square", name: "Square Frame", tilt: 4 },
  { style: "cateye", name: "Cat-Eye Frame", tilt: -3 },
  { style: "aviator", name: "Aviator Frame", tilt: 5 },
  { style: "oval", name: "Oval Frame", tilt: -5 },
  { style: "rimless", name: "Rimless Frame", tilt: 3 },
  { style: "browline", name: "Browline Frame", tilt: -4 },
  { style: "hexagon", name: "Hexagon Frame", tilt: 6 },
];

function FrameShowcase() {
  return (
    <section className="section">
      <Container>
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 640 }}>
          <span className="eyelamp-eyebrow mb-3 d-inline-flex justify-content-center">
            Frame Styles
          </span>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
            Eight silhouettes. One perfect fit for you.
          </h2>
          <p className="eyelamp-lead mx-auto mt-3">
            A quick look at the shapes available in-store — every frame is
            fitted, adjusted and priced in person at EYELAMP, Bahraich.
          </p>
        </div>

        <Row className="g-4">
          {FRAMES.map((f) => {
            const msg = encodeURIComponent(
              `Hello EYELAMP, I would like to buy a ${f.name.toLowerCase()}.`
            );
            return (
              <Col xs={6} md={4} lg={3} key={f.name}>
                <div className="frame-card">
                  <div
                    className="frame-card-art"
                    style={{ transform: `rotate(${f.tilt}deg)` }}
                  >
                    <FrameIllustration style={f.style} width={110} />
                  </div>
                  <h3>{f.name}</h3>
                  <a
                    href={`https://wa.me/918081971058?text=${msg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="frame-buy-btn"
                  >
                    <FaWhatsapp /> Buy Now
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default FrameShowcase;
