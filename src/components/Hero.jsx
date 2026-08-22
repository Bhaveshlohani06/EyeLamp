// import { Container, Row, Col } from "react-bootstrap";
// import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
// import { FiEye, FiAward, FiMapPin, FiUsers } from "react-icons/fi";

// import heroPhoto from "../assets/eye-camp-outdoor-checkup.jpg";

// const WHATSAPP_MSG = encodeURIComponent("Hello EYELAMP, I would like to book an eye test.");

// const FEATURES = [
//   { icon: <FiEye />, label: "Computerized Eye Testing" },
//   { icon: <FiAward />, label: "Certified Optometrists" },
//   { icon: <FiUsers />, label: "Personalized Fitting" },
//   { icon: <FiMapPin />, label: "Showroom in Bahraich" },
// ];

// function Hero() {
//   return (
//     <section className="hero">
//       <div
//         className="hero-bg"
//         style={{ backgroundImage: `url(${heroPhoto})` }}
//         role="img"
//         aria-label="EYELAMP optometrist conducting an eye check-up"
//       />
//       <div className="hero-bg-overlay" />

//       <Container className="position-relative">
//         <Row className="align-items-center gy-5">
//           <Col lg={7} className="reveal">
//             <span className="hero-badge mb-4 d-inline-flex">
//               <FiEye /> Optical Showroom · Bahraich, UP
//             </span>

//             <h1 className="hero-title mb-4">
//               See Better.
//               <br />
//               <em>Look Better.</em>
//             </h1>

//             <p className="eyelamp-lead mb-4">
//               Advanced eye care, premium eyewear and modern style — all under
//               one roof. Step into EYELAMP for accurate computerized eye
//               testing and a frame that's truly your fit.
//             </p>

//             <div className="d-flex flex-wrap gap-3">
//               <a
//                 href={`https://wa.me/918081971058?text=${WHATSAPP_MSG}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-brass"
//               >
//                 <FaWhatsapp /> Book an Eye Test
//               </a>
//               <a href="/eyewear" className="btn-outline-ink">
//                 Explore Eyewear <FaArrowRight />
//               </a>
//             </div>
//           </Col>

//           <Col lg={5} className="reveal">
//             <div className="hero-visual">
//               <div className="rx-card">
//                 <div className="eyelamp-eyebrow mb-2" style={{ color: "var(--brass)" }}>
//                   Vision Check
//                 </div>
//                 <div className="rx-row">
//                   <span>Eye Testing</span>
//                   <span>Computerized</span>
//                 </div>
//                 <div className="rx-row">
//                   <span>Optometrist</span>
//                   <span>Certified</span>
//                 </div>
//                 <div className="rx-row">
//                   <span>Frames</span>
//                   <span>Budget → Premium</span>
//                 </div>
//                 <div className="rx-row">
//                   <span>Lenses</span>
//                   <span>Blue Cut / Anti-Glare</span>
//                 </div>
//                 <div className="rx-row">
//                   <span>Fit</span>
//                   <span>Personalized</span>
//                 </div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       <div className="stat-strip mt-5">
//         <Container>
//           <Row className="gy-3">
//             {FEATURES.map((f) => (
//               <Col key={f.label} xs={6} md={3} className="stat-item">
//                 <div className="mb-1" style={{ color: "var(--brass)", fontSize: "1.3rem" }}>
//                   {f.icon}
//                 </div>
//                 <div className="stat-label">{f.label}</div>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </div>
//     </section>
//   );
// }

// export default Hero;



import { Container, Row, Col, Carousel } from "react-bootstrap";
import { FaWhatsapp, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiEye, FiAward, FiMapPin, FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const WHATSAPP_MSG = encodeURIComponent("Hello EYELAMP, I would like to book an eye test.");

const FEATURES = [
  { icon: <FiEye />, label: "Computerized Eye Testing" },
  { icon: <FiAward />, label: "Certified Optometrists" },
  { icon: <FiUsers />, label: "Personalized Fitting" },
  { icon: <FiMapPin />, label: "Showroom in Bahraich" },
];

function Hero() {
  const navigate = useNavigate();

  // High-Quality Online Eyewear Images
  const images = {
    slide1: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=2070&auto=format&fit=crop",
    slide2: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop",
    slide3: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=2070&auto=format&fit=crop",
  };

  const slides = [
    {
      id: 1,
      badge: "Premium Eyewear Collection",
      title: "Vision Redefined,",
      highlight: "Style Amplified.",
      desc: "Step into the future of eyewear. Discover budget-friendly to luxury frames, durable lenses, and stylish sunglasses designed just for you.",
      image: images.slide1,
      cta: "Explore Eyewear",
      route: "/eyewear"
    },
    {
      id: 2,
      badge: "Sunglasses & Lenses",
      title: "See Better.",
      highlight: "Look Better.",
      desc: "Protect your eyes with our advanced Blue Cut, Anti-Glare, and polarized lenses. Perfect vision meets modern fashion.",
      image: images.slide2,
      cta: "Explore Services",
      route: "/services"
    },
    {
      id: 3,
      badge: "Certified Optometrists",
      title: "Your Vision,",
      highlight: "Our Priority.",
      desc: "Accurate, computerized eye testing by certified optometrists. Experience personalized fitting and exceptional care.",
      image: images.slide3,
      cta: "Learn About Us",
      route: "/about"
    }
  ];

  return (
    <section className="hero">
      <Carousel 
        fade 
        indicators={true} 
        controls={true} 
        interval={5000}
        prevIcon={<FaChevronLeft className="carousel-arrow" />}
        nextIcon={<FaChevronRight className="carousel-arrow" />}
        className="h-100"
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id} className="h-100">
            
            {/* 1. Background Image */}
            <div
              className="hero-bg"
              style={{ 
                backgroundImage: `url(${slide.image})`, 
                backgroundColor: "#111" 
              }}
              role="img"
              aria-label={slide.badge}
            />
            
            {/* 2. SOLID Dark Overlay for max text visibility */}
            <div className="hero-bg-overlay-dark" />

            <Container className="position-relative hero-content">
              <Row className="align-items-center gy-5">
                <Col lg={7} className="reveal">
                  <span className="hero-badge mb-4 d-inline-flex glass-badge">
                    <FiEye /> {slide.badge}
                  </span>

                  <h1 className="hero-title mb-4 hero-text-shadow text-white">
                    {slide.title}
                    <br />
                    <em className="hero-highlight">{slide.highlight}</em>
                  </h1>

                  <p className="eyelamp-lead mb-4 hero-text-shadow text-light opacity-75">
                    {slide.desc}
                  </p>

                  <div className="d-flex flex-wrap gap-3">
                    <button 
                      onClick={() => navigate(slide.route)} 
                      className="btn-brass border-0"
                    >
                      {slide.cta} <FaArrowRight />
                    </button>
                    
                    <a
                      href={`https://wa.me/918081971058?text=${WHATSAPP_MSG}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glass"
                    >
                      <FaWhatsapp /> Book Now
                    </a>
                  </div>
                </Col>

                <Col lg={5} className="reveal d-none d-lg-block">
                  <div className="hero-visual">
                    <div className="rx-card shadow-lg">
                      <div className="eyelamp-eyebrow mb-2 text-gold">
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
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Bottom Stats Strip */}
      <div className="stat-strip mt-4 glass-strip">
        <Container>
          <Row className="gy-3">
            {FEATURES.map((f) => (
              <Col key={f.label} xs={6} md={3} className="stat-item">
                <div className="mb-1 text-gold" style={{ fontSize: "1.3rem" }}>
                  {f.icon}
                </div>
                <div className="stat-label text-white">{f.label}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* CSS for the Hero */}
      <style>{`
        .hero {
          position: relative;
          background-color: #111;
          overflow: hidden;
        }

        .hero .carousel-inner, 
        .hero .carousel-item {
          height: 100%;
          min-height: 600px;
        }

        .hero-content {
          min-height: 600px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 60px;
          padding-bottom: 120px; /* Space for the stat strip */
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          z-index: 1;
        }

        /* The KEY FIX: Solid dark overlay to guarantee text visibility */
        .hero-bg-overlay-dark {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg, 
            rgba(0, 0, 0, 0.95) 0%, 
            rgba(0, 0, 0, 0.85) 50%, 
            rgba(0, 0, 0, 0.6) 100%
          );
          z-index: 2;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
        }
        .hero-highlight {
          color: var(--brass, #d4af37);
          font-style: italic;
        }
        .hero-text-shadow {
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
        }

        .glass-badge {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 8px 15px;
          border-radius: 50px;
          color: #fff;
          letter-spacing: 1px;
          text-transform: uppercase;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .btn-brass {
          background: var(--brass, #d4af37);
          color: #111;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }
        .btn-brass:hover {
          background: #fff;
          color: #111;
          transform: translateY(-2px);
        }

        .btn-glass {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: #fff;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-glass:hover {
          background: #fff;
          color: #111;
        }

        /* Rx Card */
        .rx-card {
          background: rgba(0, 0, 0, 0.4); /* Darker backdrop for readability */
          backdrop-filter: blur(15px);
          border: 1px solid rgba(212, 175, 55, 0.2);
          padding: 25px;
          border-radius: 16px;
          color: #fff;
        }
        .rx-row {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 10px 0;
          font-size: 0.9rem;
        }
        .rx-row:last-child {
          border-bottom: none;
        }
        .text-gold {
          color: var(--brass, #d4af37);
        }

        /* Stat Strip */
        .glass-strip {
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          margin: 0 auto;
          position: absolute;
          bottom: 30px;
          left: 0;
          right: 0;
          z-index: 3;
          max-width: 900px;
          padding: 15px 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .stat-item {
          text-align: center;
        }
        .stat-label {
          font-size: 0.85rem;
          font-weight: 500;
          color: #ccc;
        }

        /* CAROUSEL CONTROLS STYLING (The 3 dots & Arrows) */
        .carousel-indicators {
          bottom: 100px; /* Move up so they don't overlap stats */
          z-index: 4;
        }
        .carousel-indicators [data-bs-target] {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.3);
          border: none;
          transition: all 0.3s ease;
        }
        .carousel-indicators .active {
          background-color: var(--brass, #d4af37);
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
        }

        .carousel-control-prev,
        .carousel-control-next {
          width: 5%;
          z-index: 5;
          opacity: 1;
        }
        .carousel-arrow {
          font-size: 1.5rem;
          color: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .carousel-control-prev:hover .carousel-arrow,
        .carousel-control-next:hover .carousel-arrow {
          color: var(--brass, #d4af37);
          transform: scale(1.2);
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .hero .carousel-inner, 
          .hero .carousel-item {
            min-height: 750px; 
          }
          .hero-content {
            min-height: 750px;
            padding-bottom: 20px;
            text-align: center;
          }
          .hero-bg-overlay-dark {
            background: linear-gradient(
              180deg, 
              rgba(0, 0, 0, 0.95) 0%, 
              rgba(0, 0, 0, 0.8) 50%, 
              rgba(0, 0, 0, 0.5) 100%
            );
          }
          .glass-badge {
            margin: 0 auto;
          }
          .carousel-indicators {
            bottom: 20px;
          }
          .stat-strip {
            position: relative;
            bottom: auto;
            margin-top: 30px;
          }
          .carousel-control-prev,
          .carousel-control-next {
            width: 10%;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;