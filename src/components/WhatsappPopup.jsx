import { useState, useEffect } from "react";
import { FiX, FiMessageCircle, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppPopup() {
  const [showScrollPopup, setShowScrollPopup] = useState(false);
  const [showTimePopup, setShowTimePopup] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const phoneNumber = "918081971058";
  const message = encodeURIComponent(
    "Hello EYELAMP, I would like to know more about your services and eyewear collection."
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  // Popup 1: Show when user scrolls 60% of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = 
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent > 60 && !hasInteracted && !showTimePopup) {
        setShowScrollPopup(true);
        setHasInteracted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasInteracted, showTimePopup]);

  // Popup 2: Show after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted && !showScrollPopup) {
        setShowTimePopup(true);
        setHasInteracted(true);
      }
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, [hasInteracted, showScrollPopup]);

  // Don't show popups if user has interacted with any
  const closeAllPopups = () => {
    setShowScrollPopup(false);
    setShowTimePopup(false);
    setHasInteracted(true);
  };

  // Only show one popup at a time (priority: scroll > time)
  const showPopup = showScrollPopup || showTimePopup;

  if (!showPopup) return null;

  return (
    <>
      {/* Overlay */}
      <div className="whatsapp-overlay" onClick={closeAllPopups}>
        <div className="whatsapp-popup" onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}
          <button className="popup-close" onClick={closeAllPopups}>
            <FiX />
          </button>

          {/* Icon */}
          <div className="popup-icon">
            <FaWhatsapp />
          </div>

          {/* Content */}
          <h3 className="popup-title">👋 Need Help?</h3>
          <p className="popup-description">
            {showScrollPopup 
              ? "Looks like you're interested! Chat with us on WhatsApp for personalized assistance."
              : "Still browsing? We're here to help! Connect with us on WhatsApp."}
          </p>

          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta"
            onClick={closeAllPopups}
          >
            <FiSend />
            Chat on WhatsApp
          </a>

          {/* Optional: Show when popup appeared */}
          <span className="popup-trigger">
            {showScrollPopup ? "💡 You scrolled 60%" : "⏱️ You've been here 30s"}
          </span>
        </div>
      </div>

      <style jsx>{`
        .whatsapp-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.3s ease;
        }

        .whatsapp-popup {
          background: linear-gradient(135deg, #1a2a3a 0%, #2c4a3a 100%);
          border: 1px solid rgba(212, 201, 168, 0.3);
          border-radius: 20px;
          padding: 40px 35px;
          max-width: 420px;
          width: 90%;
          position: relative;
          text-align: center;
          animation: slideUp 0.4s ease;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .popup-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #ffffff;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 18px;
        }

        .popup-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .popup-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #25D366, #128C7E);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          font-size: 36px;
          color: white;
          animation: pulse 2s infinite;
        }

        .popup-title {
          color: #d4c9a8;
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .popup-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .whatsapp-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #25D366;
          color: white;
          padding: 14px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
        }

        .whatsapp-cta:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
          color: white;
        }

        .popup-trigger {
          display: block;
          margin-top: 14px;
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.75rem;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        @media (max-width: 480px) {
          .whatsapp-popup {
            padding: 30px 20px;
          }
          
          .popup-icon {
            width: 60px;
            height: 60px;
            font-size: 30px;
          }
          
          .popup-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}

export default WhatsAppPopup;