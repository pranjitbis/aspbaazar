import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import AboutImage from "../../assets/Images/about.png";
import Fres from "../../assets/Images/fres.avif";

// Import team images
import JaidulImg from "../../assets/about/jaidul.jpeg";
import AsrafullImg from "../../assets/about/asrafull.jpeg";

import "../../css/About.css";

// Icons
import {
  TbTruckDelivery,
  TbClock,
  TbHeart,
  TbStar,
  TbUsers,
  TbMapPin,
  TbPhone,
  TbMail,
  TbBrandInstagram,
  TbBrandFacebook,
  TbBrandTwitter,
  TbChefHat,
  TbShoppingBag,
  TbAward,
  TbRefresh,
  TbCrown,
  TbUserStar,
} from "react-icons/tb";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
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

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Asrafull Amhed",
      role: "Employee",
      image: AsrafullImg,
      quote: "Dream big, start small, but most importantly, start.",
      icon: <TbChefHat />,
      social: {
        instagram: "https://www.instagram.com/asraful____ahmed007/",
        facebook: "#",
      },
    },
    {
      id: 2,
      name: "Jaidul Islam",
      role: "Manager",
      image: JaidulImg,
      quote: "Quality is not an act, it's a habit.",
      icon: <TbUserStar />,
      social: {
        instagram: "https://www.instagram.com/jaidul___khan_10k/",
        facebook: "https://www.facebook.com/profile.php?id=61581995567514",
      },
    },
  ];

  return (
    <div className="about-page">
      <Nav />

      {/* Hero Section */}
      <motion.section
        className="about-hero"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="about-hero-content">
          <motion.h1 variants={fadeInUp}>
            About <span>Us</span>
          </motion.h1>
          <motion.p variants={fadeInUp}>
            Your Trusted Food Delivery Partner
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a href="tel:9387300323" className="hero-cta">
              Contact Us
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Founder Story Section */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-grid">
            <motion.div
              className="founder-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={AboutImage} alt="Asrafull Pathan" />
              <motion.div
                className="founder-badge"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <TbChefHat />
              </motion.div>
            </motion.div>

            <motion.div
              className="founder-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="founder-tag">Meet The Founder</span>

              <h2>Asrafull Pathan</h2>
              <p className="founder-title">Founder & CEO</p>

              <div className="founder-quote">
                <TbHeart className="quote-icon" />
                <p>"Dream big, start small, but most importantly, start."</p>
              </div>

              <p className="founder-story">
                Hi! My name is Asrafull pathan, and I'm currently studying in
                Class 8. While most students my age are just focusing on
                studies, I had a bigger dream — to create a food delivery
                service that brings happiness through delicious food. That dream
                has now become a reality!
              </p>

              <p className="founder-story">
                We offer fast and safe food delivery from Tezpur to Dhekiajuli.
                Whether you're relaxing at home or working from your office,
                we've got your hunger covered. Our journey started with a simple
                idea: quality food should reach everyone, everywhere.
              </p>

              <motion.a
                href="tel:9387300323"
                className="founder-contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TbPhone />
                Call Me: 9387300323
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="stats-section"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="stats-grid">
            <motion.div className="stat-card" variants={scaleIn}>
              <div className="stat-icon">
                <TbUsers />
              </div>
              <h3>50+</h3>
              <p>Happy Customers</p>
            </motion.div>

            <motion.div className="stat-card" variants={scaleIn}>
              <div className="stat-icon">
                <TbShoppingBag />
              </div>
              <h3>50+</h3>
              <p>Orders Delivered</p>
            </motion.div>

            <motion.div className="stat-card" variants={scaleIn}>
              <div className="stat-icon">
                <TbMapPin />
              </div>
              <h3>5+</h3>
              <p>Cities Covered</p>
            </motion.div>

            <motion.div className="stat-card" variants={scaleIn}>
              <div className="stat-icon">
                <TbClock />
              </div>
              <h3>45 min</h3>
              <p>Avg. Delivery</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              Meet Our <span>Team</span>
            </h2>
            <p>The amazing people behind our service</p>
          </motion.div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="team-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} />
                  <div className="team-icon">{member.icon}</div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-quote">"{member.quote}"</p>
                  <div className="team-social">
                    <a
                      href={member.social.instagram}
                      className="team-social-link"
                    >
                      <TbBrandInstagram />
                    </a>
                    <a
                      href={member.social.facebook}
                      className="team-social-link"
                    >
                      <TbBrandFacebook />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fresh Quality Section */}
      <section className="fresh-section">
        <div className="container">
          <div className="fresh-grid">
            <motion.div
              className="fresh-content"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="fresh-tag">Quality First</span>
              <h2>
                Always Fresh, Always <span>Delicious</span>
              </h2>
              <p>
                We believe that great food starts with fresh ingredients. That's
                why we source our products daily from local markets and trusted
                suppliers. Every meal is prepared with care and delivered hot to
                your doorstep.
              </p>

              <div className="fresh-features">
                <motion.div className="fresh-feature" whileHover={{ x: 10 }}>
                  <TbRefresh className="feature-icon" />
                  <div>
                    <h4>Daily Fresh</h4>
                    <p>Fresh ingredients every day</p>
                  </div>
                </motion.div>

                <motion.div className="fresh-feature" whileHover={{ x: 10 }}>
                  <TbAward className="feature-icon" />
                  <div>
                    <h4>Quality Checked</h4>
                    <p>100% quality assurance</p>
                  </div>
                </motion.div>

                <motion.div className="fresh-feature" whileHover={{ x: 10 }}>
                  <TbTruckDelivery className="feature-icon" />
                  <div>
                    <h4>Fast Delivery</h4>
                    <p>45 minutes or less</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="fresh-image"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={Fres} alt="Fresh Food" />
              <motion.div
                className="fresh-badge"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Fresh
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <motion.section
        className="mission-section"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="mission-grid">
            <motion.div
              className="mission-card"
              variants={fadeInLeft}
              whileHover={{ y: -5 }}
            >
              <div className="mission-icon">
                <TbStar />
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver happiness through delicious food, making every meal a
                special moment for our customers, regardless of where they are.
              </p>
            </motion.div>

            <motion.div
              className="mission-card"
              variants={fadeInRight}
              whileHover={{ y: -5 }}
            >
              <div className="mission-icon">
                <TbHeart />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become Assam's most loved food delivery service, known for
                quality, reliability, and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>
              Our Core <span>Values</span>
            </h2>
            <p>What makes us different</p>
          </motion.div>

          <div className="values-grid">
            {[
              {
                icon: <TbHeart />,
                title: "Customer First",
                desc: "Your satisfaction is our priority",
              },
              {
                icon: <TbTruckDelivery />,
                title: "Fast Delivery",
                desc: "Quick and reliable service",
              },
              {
                icon: <TbClock />,
                title: "On Time",
                desc: "Always punctual with deliveries",
              },
              {
                icon: <TbStar />,
                title: "Quality Food",
                desc: "Fresh and delicious meals",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        className="contact-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="contact-content">
            <h2>Get In Touch</h2>
            <p>Have questions? We'd love to hear from you</p>

            <div className="contact-info">
              <motion.a
                href="tel:9387300323"
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <TbPhone />
                <span>+91 93873 00323</span>
              </motion.a>

              <motion.a
                href="mailto:aspbaazar@gmail.com"
                className="contact-item"
                whileHover={{ x: 10 }}
              >
                <TbMail />
                <span>aspbaazar@gmail.com</span>
              </motion.a>

              <motion.div className="contact-item" whileHover={{ x: 10 }}>
                <TbMapPin />
                <span>Tezpur to Dhekiajuli, Assam, India</span>
              </motion.div>
            </div>

            <div className="social-links">
              <motion.a href="#" whileHover={{ y: -5 }}>
                <TbBrandInstagram />
              </motion.a>
              <motion.a href="#" whileHover={{ y: -5 }}>
                <TbBrandFacebook />
              </motion.a>
              <motion.a href="#" whileHover={{ y: -5 }}>
                <TbBrandTwitter />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
