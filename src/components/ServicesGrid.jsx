// import { Container, Row, Col } from "react-bootstrap";
// import {
//   FiTarget,
//   FiCircle,
//   FiEye,
//   FiSun,
//   FiMonitor,
//   FiShield,
//   FiActivity,
//   FiGrid,
//   FiArrowRight,
// } from "react-icons/fi";

// import { services } from "../data/services";

// const ICONS = {
//   FiTarget: <FiTarget />,
//   FiCircle: <FiCircle />,
//   FiEye: <FiEye />,
//   FiSun: <FiSun />,
//   FiMonitor: <FiMonitor />,
//   FiShield: <FiShield />,
//   FiActivity: <FiActivity />,
//   FiGrid: <FiGrid />,
// };

// function ServicesGrid({ intro = true }) {
//   return (
//     <section className="section">
//       <Container>
//         {intro && (
//           <div className="text-center mx-auto mb-5" style={{ maxWidth: 620 }}>
//             <span className="eyelamp-eyebrow mb-3 d-inline-flex justify-content-center">
//               Our Services
//             </span>
//             <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
//               Everything your eyes need, under one roof.
//             </h2>
//           </div>
//         )}

//         <Row className="g-4">
//           {services.map((s) => {
//             const msg = encodeURIComponent(
//               `Hello EYELAMP, I am interested in ${s.name.toLowerCase()}.`
//             );
//             return (
//               <Col md={6} lg={3} key={s.id}>
//                 <div className="service-card">
//                   <div className="service-icon">{ICONS[s.icon]}</div>
//                   <h3>{s.name}</h3>
//                   <p>{s.description}</p>
//                   <a
//                     href={`https://wa.me/918081971058?text=${msg}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="service-link"
//                   >
//                     Enquire Now <FiArrowRight />
//                   </a>
//                 </div>
//               </Col>
//             );
//           })}
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default ServicesGrid;

import { Container, Row, Col } from "react-bootstrap";
import {
  FiTarget,
  FiCircle,
  FiEye,
  FiSun,
  FiMonitor,
  FiShield,
  FiActivity,
  FiGrid,
  FiArrowRight,
} from "react-icons/fi";

import { services } from "../data/services";

const ICONS = {
  FiTarget: <FiTarget />,
  FiCircle: <FiCircle />,
  FiEye: <FiEye />,
  FiSun: <FiSun />,
  FiMonitor: <FiMonitor />,
  FiShield: <FiShield />,
  FiActivity: <FiActivity />,
  FiGrid: <FiGrid />,
};

// 8 Different Eyeglass Frame Images - Various Angles & Styles
const PRODUCT_IMAGES = {
  1: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop", // Classic black frames - front view
  2: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=400&fit=crop", // Tortoiseshell frames - angled
  3: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop", // Gold wire frames - side view
  4: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop&sat=-100", // Modern square frames - front view
  5: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=400&fit=crop&sat=-100", // Vintage brown frames - angled
  6: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop&sat=-100", // Silver wire frames - side view
  7: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop&sat=-100", // Rimless frames - front view
  8: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=400&fit=crop&sat=-100", // Cat-eye frames - angled
};

function ServicesGrid({ intro = true }) {
  return (
    <section className="section services-grid-section">
      <Container>
        {intro && (
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 620 }}>
            <span className="eyelamp-eyebrow mb-3 d-inline-flex justify-content-center">
              Our Services
            </span>
            <h2 className="services-title">
              Everything your eyes need, under one roof.
            </h2>
          </div>
        )}

        <Row className="g-4">
          {services.map((s, index) => {
            const msg = encodeURIComponent(
              `Hello EYELAMP, I am interested in ${s.name.toLowerCase()}.`
            );
            // Cycle through 8 images based on index
            const imageKey = (index % 8) + 1;
            const productImage = PRODUCT_IMAGES[imageKey];
            
            return (
              <Col md={6} lg={3} key={s.id}>
                <div className="service-card">
                  {/* Product Image */}
                  <div className="service-product-image">
                    <img 
                      src={productImage} 
                      alt={s.name}
                      className="product-img"
                      loading="lazy"
                    />
                    <div className="service-icon-overlay">
                      {ICONS[s.icon]}
                    </div>
                  </div>
                  
                  <div className="service-content">
                    <h3>{s.name}</h3>
                    <p>{s.description}</p>
                    <a
                      href={`https://wa.me/918081971058?text=${msg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-link"
                    >
                      Enquire Now <FiArrowRight />
                    </a>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>

      <style jsx>{`
        .services-grid-section {
          background: linear-gradient(135deg, #1a2a3a 0%, #2c4a3a 100%);
          padding: 80px 0;
          color: #ffffff;
        }

        .services-title {
          font-size: clamp(1.9rem, 3.5vw, 2.6rem);
          color: #d4c9a8;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 201, 168, 0.15);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(212, 201, 168, 0.4);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }

        .service-product-image {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: rgba(26, 42, 58, 0.6);
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .product-img {
          transform: scale(1.08);
        }

        .service-icon-overlay {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 48px;
          height: 48px;
          background: rgba(212, 201, 168, 0.2);
          backdrop-filter: blur(5px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: #d4c9a8;
          border: 1px solid rgba(212, 201, 168, 0.3);
          transition: all 0.3s ease;
        }

        .service-card:hover .service-icon-overlay {
          background: rgba(212, 201, 168, 0.3);
          transform: scale(1.1);
        }

        .service-content {
          padding: 24px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .service-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #d4c9a8;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
        }

        .service-content p {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #d4c9a8;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          padding: 8px 0;
          transition: all 0.3s ease;
          border-bottom: 2px solid transparent;
          width: fit-content;
        }

        .service-link:hover {
          color: #ffffff;
          border-bottom-color: #d4c9a8;
          gap: 14px;
        }

        .service-link svg {
          transition: transform 0.3s ease;
        }

        .service-link:hover svg {
          transform: translateX(4px);
        }

        .eyelamp-eyebrow {
          background: rgba(212, 201, 168, 0.15);
          color: #d4c9a8;
          padding: 6px 18px;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .services-grid-section {
            padding: 50px 0;
          }

          .service-product-image {
            height: 160px;
          }

          .service-content {
            padding: 18px 16px;
          }

          .service-content h3 {
            font-size: 1.05rem;
          }

          .service-icon-overlay {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
}

export default ServicesGrid;