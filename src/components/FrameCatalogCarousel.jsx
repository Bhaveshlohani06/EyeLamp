import { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

import { catalogFrames } from "../data/catalogFrames";
import "./FrameCatalogCarousel.css";

function FrameCatalogCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <section className="section section-dim">
      <Container>
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 620 }}>
          <span className="eyelamp-eyebrow mb-3 d-inline-flex justify-content-center">
            New In Store
          </span>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
            Fresh frames from our latest collections.
          </h2>
        </div>

        <Row className="justify-content-center">
          <Col lg={9} xl={8}>
            <div className="frame-catalog-card">
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls
                indicators={false}
                interval={4500}
                pause="hover"
                prevIcon={<span className="frame-carousel-arrow"><FaChevronLeft /></span>}
                nextIcon={<span className="frame-carousel-arrow"><FaChevronRight /></span>}
              >
                {catalogFrames.map((frame) => {
                  const msg = encodeURIComponent(
                    `Hello EYELAMP, I would like to enquire about the ${frame.collection} ${frame.code} frame.`
                  );
                  return (
                    <Carousel.Item key={frame.code}>
                      <div className="frame-catalog-slide">
                        <img
                          src={frame.image}
                          alt={`${frame.collection} ${frame.code} eyeglass frame`}
                          className="frame-catalog-image"
                        />
                        <div className="frame-catalog-info">
                          <span className="eyelamp-eyebrow" style={{ fontSize: "0.65rem" }}>
                            {frame.collection} · {frame.type}
                          </span>
                          <h3 className="mb-2 mt-1">{frame.code}</h3>
                          <p className="mb-3" style={{ color: "var(--slate)", fontSize: "0.88rem" }}>
                            <FiEye className="me-1" style={{ verticalAlign: "-2px" }} />
                            Available in {frame.colors} colourways
                          </p>
                          <a
                            href={`https://wa.me/918081971058?text=${msg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-brass"
                          >
                            <FaWhatsapp /> Buy Now
                          </a>
                        </div>
                      </div>
                    </Carousel.Item>
                  );
                })}
              </Carousel>

              <div className="frame-catalog-counter">
                {index + 1} / {catalogFrames.length}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FrameCatalogCarousel;
