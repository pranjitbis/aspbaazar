import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  TbTruckDelivery,
  TbShoppingCart,
  TbPhone,
  TbChevronLeft,
  TbChevronRight,
} from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi2";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Import assets
import Banner from "../../assets/banner.png";
import BannerOne from "../../assets/banner2.png";
import BannerTow from "../../assets/banner3.png";
import PopularBannerOne from "../../assets/PopularItem/PopularBanner1.png";
import PopularBannerTow from "../../assets/PopularItem/PopularBanner2.png";
import burger from "../../assets/burger-1.png.png";
import superItem from "../../assets/superqualityfood.png";
import slideImage from "../../assets/chicken_biryani.png";
import superqualityfood from "../../assets/superqualityfood.png";
import reputation from "../../assets/reputation.png";
import BannerImage from "../../assets/upiSupport.png";
import cash from "../../assets/cash.jpg";
import deliveryMan from "../../assets/delivery-man-1.png";

// Import data
import cards from "./PopularItem";
import FoodItem from "./FoodItem";
import coldDrinkItem from "./coldDrinkItem";

// Import CSS
import "../../css/Hero.css";

export default function Hero() {
  const [next, setNext] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const popularRef = useRef(null);
  const swiperRef = useRef(null);

  // Calculate items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle popular items slider
  const MoveNext = () => {
    const maxIndex = Math.ceil(cards.length / itemsPerView) - 1;
    setNext((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const Prev = () => {
    setNext((prev) => (prev > 0 ? prev - 1 : 0));
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-out-cubic",
      delay: 100,
      once: true,
    });
  }, []);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };

  const text = "Cold Drink";
  const slideItem = [
    "Popular Dishes",
    "Trending",
    "Popular Food Item",
    "Popular Cold Drink",
  ];
  const slideNew = [...slideItem, ...slideItem];

  // Banner slides data
  const bannerSlides = [
    {
      id: 1,
      img: Banner,
      title: "Tandoori Paneer, Pure",
      subtitle: "Craving!",
      price: "₹99",
      originalPrice: "₹150",
      btnText: "Buy Now",
      btnIcon: <TbTruckDelivery />,
      color: "#ff6b6b",
    },
    {
      id: 2,
      img: BannerOne,
      title: "Aloo Paratha, Butter",
      subtitle: "Heaven!",
      price: "₹90",
      originalPrice: "₹100",
      btnText: "Buy Now",
      btnIcon: <TbTruckDelivery />,
      color: "#4ecdc4",
    },
    {
      id: 3,
      img: BannerTow,
      title: "Samosa Love at First",
      subtitle: "Bite!",
      price: "₹90",
      originalPrice: "₹150",
      btnText: "Call Now",
      btnIcon: <TbPhone />,
      color: "#ffe66d",
    },
  ];

  return (
    <div className="hero-container">
      {/* Hero Banner Section */}
      <motion.section
        className="banner-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          className="hero-swiper"
          ref={swiperRef}
        >
          {bannerSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <motion.div
                className="slide-content"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6 }}
              >
                <div className="slide-image-wrapper">
                  <img src={slide.img} alt={`Slide ${index + 1}`} />
                  <div className="image-overlay"></div>
                </div>

                <motion.div
                  className="banner-item"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {slide.title} <br />
                    <motion.span
                      style={{ color: slide.color }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {slide.subtitle}
                    </motion.span>
                  </motion.h2>

                  <motion.div
                    className="price-btn"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <motion.a
                      href="tel:9387300323"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button className="primary-btn">
                        {slide.btnText}
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          {slide.btnIcon}
                        </motion.span>
                      </button>
                    </motion.a>
                    <div className="price-wrapper">
                      <p className="current-price">{slide.price}</p>
                      <p className="original-price">{slide.originalPrice}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation */}
          <button className="custom-prev">
            <TbChevronLeft />
          </button>
          <button className="custom-next">
            <TbChevronRight />
          </button>
        </Swiper>
      </motion.section>

      {/* Popular Items Section */}
      <motion.section
        className="popular-section"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="section-header" variants={fadeInUp}>
          <h4 className="section-subtitle">crispy, every bite taste</h4>
          <h2 className="section-title">Popular Food Items</h2>
        </motion.div>

        <div className="popular-wrapper" ref={popularRef}>
          <div className="slider-controls">
            <motion.button
              onClick={Prev}
              whileHover={{ scale: 1.1, backgroundColor: "#ff6b6b" }}
              whileTap={{ scale: 0.9 }}
              className="control-btn"
              disabled={next === 0}
            >
              <GrFormPreviousLink />
            </motion.button>
            <motion.button
              onClick={MoveNext}
              whileHover={{ scale: 1.1, backgroundColor: "#ff6b6b" }}
              whileTap={{ scale: 0.9 }}
              className="control-btn"
              disabled={next >= Math.ceil(cards.length / itemsPerView) - 1}
            >
              <GrFormNextLink />
            </motion.button>
          </div>

          <div className="popular-grid-container">
            <motion.div
              className="popular-grid"
              style={{
                transform: `translateX(-${next * (100 / itemsPerView)}%)`,
              }}
              variants={staggerContainer}
            >
              {cards.map((item, index) => (
                <motion.div
                  key={index}
                  className="popular-card"
                  variants={scaleIn}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="card-image">
                    <img src={item.img} alt={item.title} />
                    <motion.div
                      className="card-overlay"
                      whileHover={{ opacity: 1 }}
                    >
                      <TbShoppingCart />
                    </motion.div>
                  </div>
                  <p>{item.title}</p>
                  <div className="line-shape"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div className="popular-banners" variants={staggerContainer}>
          <motion.img
            src={PopularBannerOne}
            alt="Banner 1"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            id="popular-banner-img"
            src={PopularBannerTow}
            alt="Banner 2"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </motion.section>

      {/* Food Items Section */}
      <motion.section
        className="items-section"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-header" variants={fadeInUp}>
          <p className="section-subtitle">crispy, every bite taste</p>
          <h2 className="section-title">Foods Items</h2>
        </motion.div>

        <div className="food-grid">
          {FoodItem.map((item, index) => (
            <motion.div
              key={index}
              className="food-card"
              variants={scaleIn}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
              }}
              data-aos="fade-up"
            >
              <div className="food-image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="food-info">
                <p className="food-price">
                  <span>
                    <HiShoppingCart />
                  </span>
                  {item.price}
                </p>
                <p className="food-title">{item.title}</p>
                <motion.button
                  className="primary-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="tel:9387300323">Order Now</a>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Cold Drinks Section */}
      <motion.section
        className="cold-drinks-section"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="cold-text-container">
          {text.split("").map((char, i) => (
            <motion.span
              className="animated-text"
              key={i}
              initial={{ y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.2,
                color: "#ff6b6b",
                transition: { type: "spring", stiffness: 500 },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
        <div className="divider"></div>

        <motion.div className="cold-drinks-grid" variants={staggerContainer}>
          {coldDrinkItem.map((item, index) => (
            <motion.div
              key={index}
              className="cold-drink-card"
              variants={scaleIn}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
              }}
              data-aos="fade-up"
            >
              <div className="drink-image">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="drink-info">
                <p className="drink-price">
                  <span>
                    <HiShoppingCart id="card-store" />
                  </span>
                  {item.price}
                </p>
                <p className="drink-title">{item.title}</p>
                <motion.a
                  href="tel:9387300323"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className="delivery-btn">
                    <span>
                      <TbTruckDelivery />
                    </span>
                    Order Now
                  </button>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Infinite Slider */}
      <motion.div
        className="infinite-slider"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="slider-track"
          animate={{
            x: [0, -2000],
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {slideNew.map((item, index) => (
            <div className="slide-item" key={index}>
              <h3>{item}</h3>
              <img src={burger} alt="Burger" />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        className="features-section"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            icon: superItem,
            title: "Super Quality Food",
            description:
              "A team of dreamers and doers building unique interactive music and art",
          },
          {
            icon: superItem,
            title: "ORIGINAL RECIPES",
            description:
              "A team of dreamers and doers building unique interactive music and art",
          },
          {
            icon: superItem,
            title: "QUICK FAST DELIVERY",
            description:
              "A team of dreamers and doers building unique interactive music and art",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            variants={scaleIn}
            whileHover={{ y: -10 }}
          >
            <img src={feature.icon} alt={feature.title} />
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* About Section */}
      <motion.section
        className="about-section"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="about-image" variants={scaleIn}>
          <img src={slideImage} alt="Food" />
        </motion.div>

        <motion.div className="about-content" variants={staggerContainer}>
          <motion.p className="about-tag" variants={fadeInUp}>
            About Our Food
          </motion.p>
          <motion.h2 variants={fadeInUp}>
            Where Quality Meet Excellent <span>Service.</span>
          </motion.h2>
          <motion.p variants={fadeInUp}>
            Its the perfect dining experience where every dish is crafted with
            fresh, high-quality Experience quick and efficient service that
            ensures your food is servead fresh Its the dining experience where
            every dish is crafted with fresh, high-quality ingredients
          </motion.p>

          <motion.div className="about-details" variants={staggerContainer}>
            <motion.div className="detail-item" variants={fadeInUp}>
              <img src={superqualityfood} alt="Quality" />
              <div>
                <h3>Super Quality Food</h3>
                <p>
                  A team of dreamers and doers building unique interactive music
                  and art
                </p>
              </div>
            </motion.div>

            <motion.div className="detail-item" variants={fadeInUp}>
              <img src={reputation} alt="Reputation" />
              <div>
                <h3>Well Reputation</h3>
                <p>
                  A team of dreamers and doers building unique interactive music
                  and art
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.button
            className="about-btn"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More About Us
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Payment Methods */}
      <motion.div
        className="payment-methods"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.img
          src={BannerImage}
          alt="UPI Support"
          variants={scaleIn}
          whileHover={{ scale: 1.05 }}
        />
        <motion.img
          src={cash}
          alt="Cash Payment"
          variants={scaleIn}
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      {/* Delivery Section */}
      <motion.section
        className="delivery-section"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div className="delivery-content" variants={staggerContainer}>
          <motion.p variants={fadeInUp}>Crispy, Every Bite Taste</motion.p>
          <motion.h2 variants={fadeInUp}>
            45 Minutes Fast <span>Delivery</span> Challenge
          </motion.h2>
          <motion.a
            href="tel:9387300323"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="Order-NowBrtn"
            whileTap={{ scale: 0.95 }}
          >
            <button className="delivery-btn">
              <span>
                <TbTruckDelivery />
              </span>
              Order Now
            </button>
          </motion.a>
        </motion.div>

        <motion.div
          className="delivery-image"
          variants={scaleIn}
          animate={{
            y: [0, -20, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <img src={deliveryMan} alt="Delivery Man" />
        </motion.div>
      </motion.section>
    </div>
  );
}
