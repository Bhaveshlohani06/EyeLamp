import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

import SocialIcons from "../components/SocialIcons";
import { services } from "../data/services";
import logo from "../assets/eyelamp-logo.png";
import founderPhoto from "../assets/founder-photo-placeholder.jpg";

function Footer() {
  return (
    <footer className="eyelamp-footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="eyelamp-logo mb-3" style={{ color: "var(--paper)" }}>
              <img src={logo} alt="EYELAMP logo" className="eyelamp-logo-mark" />
              {/* EYE<span>LAMP</span> */}
            </div>
            <p className="mb-3" style={{ maxWidth: 320 }}>
              Advanced eye care meets modern fashion. Computerized eye testing,
              premium eyewear and personalized service, all under one roof.
            </p>
            <SocialIcons />
          </div>

          <div className="col-lg-2 col-md-6 col-6">
            <h5>Quick Links</h5>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/eyewear">Eyewear</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col-lg-3 col-md-6 col-6">
            <h5>Services</h5>
            {services.slice(0, 6).map((s) => (
              <Link key={s.id} to="/services">
                {s.name}
              </Link>
            ))}
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Contact</h5>
            <a href="https://maps.google.com/?q=Opposite+AIMS+International+School,+Adilpur,+Bahraich,+Uttar+Pradesh+271801" target="_blank" rel="noopener noreferrer" className="d-flex align-items-start gap-2">
              <FiMapPin className="flex-shrink-0 mt-1" />
              <span>
                Opposite AIMS International School, Adilpur, Bahraich,
                Uttar Pradesh – 271801
              </span>
            </a>
            <a href="tel:+918081971058" className="d-flex align-items-center gap-2">
              <FiPhone /> +91 80819 71058
            </a>
            <a href="mailto:eyelamp01@gmail.com" className="d-flex align-items-center gap-2">
              <FiMail /> eyelamp01@gmail.com
            </a>
          </div>
        </div>

        <div className="footer-founder mt-5">
          <img src="/images/founder.png" alt="Achintya Pandey, CEO and Founder of EYELAMP" />
          <div>
            <div className="name">Achintya Pandey</div>
            <div className="role">CEO &amp; Founder</div>
          </div>
        </div>

        <div className="eyelamp-footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center text-md-start">
          <span>© 2026 EYELAMP. All Rights Reserved.</span>
          <span>Developed for EYELAMP Optical Showroom, Bahraich.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
