import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../css/Footer.css";

// Icons
import {
  TbPhone,
  TbMail,
  TbMapPin,
  TbClock,
  TbBrandInstagram,
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandYoutube,
  TbBrandLinkedin,
  TbTruckDelivery,
  TbHeart,
  TbCreditCard,
  TbShield,
  TbChevronRight,
} from "react-icons/tb";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Info */}
          <motion.div
            className="footer-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={fadeInUp} className="footer-logo">
              Asp<span>Baazar</span>
            </motion.h3>
            <motion.p variants={fadeInUp} className="footer-description">
              Delivering happiness through delicious food. Fresh, fast, and
              reliable food delivery service from Delhi to Goa.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={fadeInUp}>Quick Links</motion.h3>
            <motion.ul variants={fadeInUp} className="footer-links">
              <li>
                <Link to="/">
                  <TbChevronRight /> Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <TbChevronRight /> About Us
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  <TbChevronRight /> Contact
                </Link>
              </li>
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="footer-section"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={fadeInUp}>Contact Us</motion.h3>
            <motion.div variants={fadeInUp} className="footer-contact">
              <div className="contact-item">
                <TbPhone className="contact-icon" />
                <div>
                  <p>Call Us 24/7</p>
                  <a href="tel:9387300323">+91 93873 00323</a>
                </div>
              </div>
              <div className="contact-item">
                <TbMail className="contact-icon" />
                <div>
                  <p>Email Us</p>
                  <a href="mailto:info@fooddelivery.com">
                    info@fooddelivery.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <TbMapPin className="contact-icon" />
                <div>
                  <p>Head Office</p>
                  <span>Delhi to Goa, India</span>
                </div>
              </div>
              <div className="contact-item">
                <TbClock className="contact-icon" />
                <div>
                  <p>Working Hours</p>
                  <span>Mon-Sat: 9AM - 11PM</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Bar */}
        <div className="footer-features">
          <div className="feature-item">
            <TbTruckDelivery />
            <span>Free Delivery</span>
            <small>First Delivery</small>
          </div>
          <div className="feature-item">
            <TbHeart />
            <span>100% Fresh</span>
            <small>Quality guaranteed</small>
          </div>
          <div className="feature-item">
            <TbCreditCard />
            <span>Secure Payment</span>
            <small>UPI, Cards, COD</small>
          </div>
          <div className="feature-item">
            <TbShield />
            <span>24/7 Support</span>
            <small>Always here to help</small>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="footer-payment">
          <span>We Accept:</span>
          <div className="payment-icons">
            <span>💳 Visa</span>
            <span>📱 UPI</span>
            <span>💰 GPay</span>
            <span>💵 Paytm</span>
            <span>💶 PhonePe</span>
            <span>💷 Cash</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
