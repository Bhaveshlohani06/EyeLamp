import { Container, Row, Col } from "react-bootstrap";

import photo1 from "../assets/eye-camp-consultation-1.jpg";
import photo2 from "../assets/eye-camp-consultation-2.jpg";
import photo3 from "../assets/eye-camp-pharmacy-visit.jpg";
import photo4 from "../assets/eye-camp-outdoor-checkup.jpg";

const PHOTOS = [
  {
    src: photo2,
    alt: "EYELAMP optometrist consulting a patient at an eye check-up desk",
    caption: "One-on-one consultations",
  },
  {
    src: photo1,
    alt: "EYELAMP eye check-up camp with patients waiting to be seen",
    caption: "Community eye check-up camps",
  },
  {
    src: photo3,
    alt: "EYELAMP optometrist visiting a patient at a local pharmacy",
    caption: "On-site vision screening",
  },
  {
    src: photo4,
    alt: "EYELAMP optometrist conducting an outdoor eye check-up",
    caption: "Eye care, wherever it's needed",
  },
];

function EyeCampGallery() {
  return (
    <section className="section section-dim">
      <Container>
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 620 }}>
          <span className="eyelamp-eyebrow mb-3 d-inline-flex justify-content-center">
            On The Ground
          </span>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
            Real eye care, out in the community.
          </h2>
          <p className="eyelamp-lead mx-auto mt-3">
            EYELAMP regularly conducts eye check-up camps and personal
            consultations across Bahraich, bringing computerized testing and
            certified optometrists closer to the people who need them.
          </p>
        </div>

        <Row className="g-3">
          {PHOTOS.map((p) => (
            <Col xs={6} lg={3} key={p.src}>
              <figure className="gallery-item mb-0">
                <img src={p.src} alt={p.alt} loading="lazy" />
                <figcaption>{p.caption}</figcaption>
              </figure>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default EyeCampGallery;
