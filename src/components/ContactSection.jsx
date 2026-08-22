import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const SERVICE_OPTIONS = [
  "Computerized Eye Testing",
  "Spectacles",
  "Sunglasses",
  "Contact Lenses",
  "Power Lenses",
  "Blue Cut Lenses",
  "Anti-Glare Lenses",
  "Premium & Budget Frames",
  "Other",
];

const MAPS_URL =
  "https://maps.google.com/?q=Opposite+AIMS+International+School,+Adilpur,+Bahraich,+Uttar+Pradesh+271801";

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: SERVICE_OPTIONS[0],
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please share your name and phone number.");
      return;
    }

    // Frontend-only submission: we don't store this anywhere.
    // Instead we hand the enquiry straight to EYELAMP over WhatsApp.
    const text = encodeURIComponent(
      `Hello EYELAMP, my name is ${form.name}.\n` +
        `Phone: ${form.phone}\n` +
        `Interested in: ${form.service}\n` +
        `Message: ${form.message || "—"}`
    );

    toast.success("Opening WhatsApp with your enquiry…");
    window.open(`https://wa.me/918081971058?text=${text}`, "_blank", "noopener,noreferrer");

    setForm({ name: "", phone: "", service: SERVICE_OPTIONS[0], message: "" });
  };

  return (
    <section className="section">
      <Container>
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 620 }}>
          <span className="eyelamp-eyebrow mb-3 d-inline-flex justify-content-center">
            Get In Touch
          </span>
          <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)" }}>
            Visit us, call us, or message on WhatsApp.
          </h2>
        </div>

        <Row className="g-3 mb-5">
          <Col md={6} lg={3}>
            <a href="tel:+918081971058" className="contact-card text-decoration-none">
              <span className="contact-icon"><FiPhone /></span>
              <div>
                <div className="fw-semibold" style={{ color: "var(--ink)" }}>Call Us</div>
                <div style={{ fontSize: "0.85rem", color: "var(--slate)" }}>+91 80819 71058</div>
              </div>
            </a>
          </Col>
          <Col md={6} lg={3}>
            <a
              href={`https://wa.me/918081971058?text=${encodeURIComponent("Hello EYELAMP, I have a question.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card text-decoration-none"
            >
              <span className="contact-icon"><FaWhatsapp /></span>
              <div>
                <div className="fw-semibold" style={{ color: "var(--ink)" }}>WhatsApp</div>
                <div style={{ fontSize: "0.85rem", color: "var(--slate)" }}>+91 80819 71058</div>
              </div>
            </a>
          </Col>
          <Col md={6} lg={3}>
            <a href="mailto:eyelamp01@gmail.com" className="contact-card text-decoration-none">
              <span className="contact-icon"><FiMail /></span>
              <div>
                <div className="fw-semibold" style={{ color: "var(--ink)" }}>Email</div>
                <div style={{ fontSize: "0.85rem", color: "var(--slate)" }}>eyelamp01@gmail.com</div>
              </div>
            </a>
          </Col>
          <Col md={6} lg={3}>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="contact-card text-decoration-none">
              <span className="contact-icon"><FiMapPin /></span>
              <div>
                <div className="fw-semibold" style={{ color: "var(--ink)" }}>Visit</div>
                <div style={{ fontSize: "0.85rem", color: "var(--slate)" }}>Get Directions</div>
              </div>
            </a>
          </Col>
        </Row>

        <Row className="gy-5">
          <Col lg={5}>
            <h3 className="mb-3" style={{ fontSize: "1.4rem" }}>EYELAMP</h3>
            <p className="eyelamp-lead mb-4">
              Opposite AIMS International School, Adilpur, Bahraich,
              Uttar Pradesh – 271801
            </p>
            <div className="rounded-4 overflow-hidden border" style={{ borderColor: "var(--line)" }}>
              <iframe
                title="EYELAMP location map"
                src="https://maps.google.com/maps?q=Bahraich,Uttar%20Pradesh%20271801&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>

          <Col lg={7}>
            <div className="p-4 p-md-5 rounded-4 bg-white border" style={{ borderColor: "var(--line)" }}>
              <h3 className="mb-4" style={{ fontSize: "1.4rem" }}>Send an Enquiry</h3>
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col sm={6}>
                    <Form.Control
                      className="form-control-eyelamp"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      className="form-control-eyelamp"
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col sm={12}>
                    <Form.Select
                      className="form-control-eyelamp"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col sm={12}>
                    <Form.Control
                      className="form-control-eyelamp"
                      as="textarea"
                      rows={4}
                      name="message"
                      placeholder="Tell us a bit more (optional)"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm={12}>
                    <button type="submit" className="btn-brass w-100 justify-content-center">
                      <FaWhatsapp /> Send via WhatsApp
                    </button>
                    <p className="text-center mt-2 mb-0" style={{ fontSize: "0.78rem", color: "var(--slate)" }}>
                      This opens WhatsApp with your details filled in — nothing is stored on our website.
                    </p>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;
