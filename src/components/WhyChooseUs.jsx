import { Container, Row, Col } from "react-bootstrap";

const BENEFITS = [
  {
    title: "Computerized Eye Testing",
    desc: "Accurate, modern eye testing equipment for a reliable prescription.",
  },
  {
    title: "Certified Optometrists",
    desc: "Experienced, certified professionals guide every eye check-up.",
  },
  {
    title: "Premium Quality Lenses",
    desc: "Durable lenses including blue-cut and anti-glare options.",
  },
  {
    title: "Wide Range of Frames",
    desc: "Extensive frame styles to suit every face shape and taste.",
  },
  {
    title: "Affordable to Luxury Options",
    desc: "Collections spanning budget-friendly to premium price points.",
  },
  {
    title: "Personalized Fitting",
    desc: "One-on-one guidance to get the fit and look right for you.",
  },
];

function WhyChooseUs() {
  return (
    <section className="section section-dim">
      <Container>
        <Row className="align-items-start gy-4">
          <Col lg={4} className="reveal">
            <span className="eyelamp-eyebrow mb-3 d-inline-flex">Why Choose EYELAMP</span>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
              A showroom built around your eyes, not just your frames.
            </h2>
          </Col>

          <Col lg={8}>
            <Row>
              {BENEFITS.map((b, i) => (
                <Col sm={6} key={b.title}>
                  <div className="why-card">
                    <span className="why-num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h4>{b.title}</h4>
                      <p>{b.desc}</p>
                    </div>
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

export default WhyChooseUs;
