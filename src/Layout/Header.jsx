import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import logo from "../assets/eyelamp-logo.png";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/eyewear", label: "Eyewear" },
  { to: "/contact", label: "Contact" },
];

const WHATSAPP_MSG = encodeURIComponent("Hello EYELAMP, I would like to book an eye test.");

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`eyelamp-nav ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="eyelamp-logo">
          <img src={logo} alt="EYELAMP logo" className="eyelamp-logo-mark" />
          {/* EYE<span>LAMP</span> */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="eyelamp-navbar" />

        <Navbar.Collapse id="eyelamp-navbar">
          <Nav className="mx-lg-auto">
            {NAV_LINKS.map((link) => (
              <Nav.Link
                key={link.to}
                as={NavLink}
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>

          <div className="d-flex align-items-center gap-2 flex-wrap">
            <a
              href="https://www.instagram.com/eyelamp01/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-instagram-btn mt-3 mt-lg-0"
              aria-label="EYELAMP on Instagram"
              title="EYELAMP on Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href={`https://wa.me/918081971058?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-3 mt-lg-0"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
