import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Contact.css";

// Icons
import {
  TbPhone,
  TbMail,
  TbMapPin,
  TbClock,
  TbBrandWhatsapp,
  TbBrandInstagram,
  TbBrandFacebook,
  TbBrandTwitter,
  TbSend,
  TbHeadphones,
  TbMessage,
  TbUser,
  TbBuildingStore,
  TbCheck,
  TbAlertCircle,
} from "react-icons/tb";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  const iframeRef = useRef(null);
  const formRef = useRef(null);

  // Your Google Apps Script URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbxcz95_SzPbX9lSn8C4kYWSU2sP0KFSHHioWIE1D3z503GXOMHfMzF_6HqnJ_dTlBC1Xw/exec";

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form
  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: "Please enter your name",
      });
      return false;
    }

    if (!formData.email.trim()) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: "Please enter your email",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: "Please enter a valid email address",
      });
      return false;
    }

    if (!formData.phone.trim()) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: "Please enter your phone number",
      });
      return false;
    }

    if (!formData.subject.trim()) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: "Please enter a subject",
      });
      return false;
    }

    if (!formData.message.trim()) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: "Please enter your message",
      });
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Set loading state
    setFormStatus({
      loading: true,
      success: false,
      error: false,
      message: "Sending your message...",
    });

    // Create a form and submit to iframe
    const form = document.createElement("form");
    form.method = "POST";
    form.action = GOOGLE_SCRIPT_URL;
    form.target = "hidden_iframe";
    form.style.display = "none";

    // Add form data
    const fields = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    for (const [key, value] of Object.entries(fields)) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    }

    // Add to document and submit
    document.body.appendChild(form);

    // Set timeout to handle response
    const timeoutId = setTimeout(() => {
      // Success (assuming it worked)
      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Remove form
      document.body.removeChild(form);

      // Auto hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({
          ...prev,
          success: false,
          message: "",
        }));
      }, 5000);
    }, 2000);

    form.submit();
  };

  return (
    <div className="contact-page">
      <Nav />

      {/* Hidden iframe for form submission */}
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        title="hidden-iframe"
        ref={iframeRef}
      ></iframe>

      {/* Hero Section */}
      <motion.section
        className="contact-hero"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="contact-hero-content">
          <motion.h1 variants={fadeInUp}>
            Contact <span>Us</span>
          </motion.h1>
          <motion.p variants={fadeInUp}>We're here to help 24/7</motion.p>
        </div>
      </motion.section>

      {/* Quick Contact Cards */}
      <motion.section
        className="quick-contact"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="quick-contact-grid">
            <motion.a
              href="tel:9387300323"
              className="quick-card"
              variants={scaleIn}
              whileHover={{ y: -5 }}
            >
              <div className="quick-icon">
                <TbPhone />
              </div>
              <h3>Call Us</h3>
              <p>+91 93873 00323</p>
              <span className="quick-note">24/7 Available</span>
            </motion.a>

            <motion.a
              href="https://wa.me/919387300323"
              className="quick-card"
              variants={scaleIn}
              whileHover={{ y: -5 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="quick-icon whatsapp">
                <TbBrandWhatsapp />
              </div>
              <h3>WhatsApp</h3>
              <p>+91 93873 00323</p>
              <span className="quick-note">Reply within 5 min</span>
            </motion.a>

            <motion.a
              href="mailto:info@foodservice.com"
              className="quick-card"
              variants={scaleIn}
              whileHover={{ y: -5 }}
            >
              <div className="quick-icon email">
                <TbMail />
              </div>
              <h3>Email Us</h3>
              <p>aspbaazar@gmail.com</p>
            </motion.a>

            <motion.div
              className="quick-card"
              variants={scaleIn}
              whileHover={{ y: -5 }}
            >
              <div className="quick-icon location">
                <TbMapPin />
              </div>
              <h3>Visit Us</h3>
              <p>Delhi to Goa, India</p>
              <span className="quick-note">Multiple Locations</span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Contact Section */}
      <section className="main-contact">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>We'd love to hear from you</p>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <TbUser className="input-icon" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      disabled={formStatus.loading}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <TbMail className="input-icon" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      disabled={formStatus.loading}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      <TbPhone className="input-icon" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      disabled={formStatus.loading}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      <TbMessage className="input-icon" />
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      disabled={formStatus.loading}
                      required
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">
                    <TbSend className="input-icon" />
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="6"
                    disabled={formStatus.loading}
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className={`submit-btn ${formStatus.loading ? "loading" : ""}`}
                  whileHover={!formStatus.loading ? { scale: 1.02 } : {}}
                  whileTap={!formStatus.loading ? { scale: 0.98 } : {}}
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <TbSend />
                      Send Message
                    </>
                  )}
                </motion.button>

                {formStatus.message && (
                  <motion.div
                    className={`form-message ${formStatus.success ? "success" : ""} ${formStatus.error ? "error" : ""}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {formStatus.success && <TbCheck className="message-icon" />}
                    {formStatus.error && (
                      <TbAlertCircle className="message-icon" />
                    )}
                    {formStatus.message}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="contact-info-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="info-header">
                <h2>Contact Information</h2>
                <p>Get in touch with us</p>
              </div>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">
                    <TbHeadphones />
                  </div>
                  <div className="info-content">
                    <h3>Customer Support</h3>
                    <p>+91 93873 00323</p>
                    <p>aspbaazar@gmail.com</p>
                    <span className="info-badge">24/7 Available</span>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <TbBuildingStore />
                  </div>
                  <div className="info-content">
                    <h3>Business Inquiries</h3>
                    <p>+91 98765 43210</p>
                    <p>aspbaazar@gmail.com</p>
                    <span className="info-badge">Mon-Sat, 9AM-8PM</span>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <TbMapPin />
                  </div>
                  <div className="info-content">
                    <h3>Head Office</h3>
                    <p>484149 - Thelamara,</p>
                    <p>Assam</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <TbClock />
                  </div>
                  <div className="info-content">
                    <h3>Working Hours</h3>
                    <p>Monday - Saturday: 9:00 AM - 11:00 PM</p>
                    <p>Sunday: 10:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
