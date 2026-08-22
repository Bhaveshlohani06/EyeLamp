// import { FaWhatsapp } from "react-icons/fa";

// const MESSAGE = encodeURIComponent(
//   "Hello EYELAMP, I would like to know more about your eyewear collection."
// );

// function FloatingWhatsApp() {
//   return (
//     <a
//       href={`https://wa.me/918081971058?text=${MESSAGE}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="floating-whatsapp"
//       aria-label="Chat with EYELAMP on WhatsApp"
//       title="Chat on WhatsApp"
//     >
//       <FaWhatsapp />
//     </a>
//   );
// }

// export default FloatingWhatsApp;


// components/FloatingWhatsApp.jsx
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "918081971058";
  const message = encodeURIComponent("Hello EYELAMP, I need assistance with your services.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    // Show after 5 seconds and scroll
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
        <span className="tooltip">Chat with us</span>
      </a>

      <style jsx>{`
        .floating-whatsapp {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: #25D366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          z-index: 9998;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
          text-decoration: none;
          animation: bounce 2s infinite;
        }

        .floating-whatsapp:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(37, 211, 102, 0.6);
          color: white;
        }

        .floating-whatsapp .tooltip {
          position: absolute;
          right: 70px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          white-space: nowrap;
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .floating-whatsapp:hover .tooltip {
          opacity: 1;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @media (max-width: 480px) {
          .floating-whatsapp {
            width: 50px;
            height: 50px;
            font-size: 26px;
            bottom: 20px;
            right: 20px;
          }
        }
      `}</style>
    </>
  );
}

export default FloatingWhatsApp;