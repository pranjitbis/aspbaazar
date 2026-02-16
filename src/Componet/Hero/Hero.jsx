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
  TbStar,
  TbClock,
  TbDiscount,
} from "react-icons/tb";
import { HiShoppingCart } from "react-icons/hi2";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
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
  const [likedItems, setLikedItems] = useState({});
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const popularRef = useRef(null);
  const swiperRef = useRef(null);

  // Calculate items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      const tablet = window.innerWidth >= 640 && window.innerWidth < 1024;

      setIsMobile(mobile);
      setIsTablet(tablet);

      if (mobile) {
        setItemsPerView(1.2);
      } else if (tablet) {
        setItemsPerView(2.2);
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
    const maxIndex = Math.ceil(cards.length / Math.floor(itemsPerView)) - 1;
    setNext((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const Prev = () => {
    setNext((prev) => (prev > 0 ? prev - 1 : 0));
  };

  // Toggle like
  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    AOS.init({
      offset: 50,
      duration: 800,
      easing: "ease-out-cubic",
      delay: 50,
      once: true,
    });
  }, []);

  // Banner slides data with background images
  const bannerSlides = [
    {
      id: 1,
      backgroundImage: Banner,
      title: "Tandoori Paneer",
      subtitle: "Craving!",
      description: "Spicy & delicious paneer tikka with secret spices",
      price: "₹99",
      originalPrice: "₹150",
      discount: "35% off",
      btnText: "Order Now",
      btnIcon: <TbTruckDelivery />,
      color: "#079ff7",
      overlay:
        "linear-gradient(135deg, rgba(19, 83, 136, 0.9) 0%, rgba(142, 168, 255, 0.85) 100%)",
    },
    {
      id: 2,
      backgroundImage: BannerOne,
      title: "Aloo Paratha",
      subtitle: "Heaven!",
      description: "Stuffed with spiced potatoes, served with butter",
      price: "₹90",
      originalPrice: "₹100",
      discount: "10% off",
      btnText: "Order Now",
      btnIcon: <TbTruckDelivery />,
      color: "#4ecdc4",
      overlay:
        "linear-gradient(135deg, rgba(72, 24, 136, 0.9) 0%, rgba(97, 146, 236, 0.85) 100%)",
    },
    {
      id: 3,
      backgroundImage: BannerTow,
      title: "Samosa",
      subtitle: "Bite!",
      description: "Crispy pastry filled with spiced potatoes & peas",
      price: "₹90",
      originalPrice: "₹150",
      discount: "40% off",
      btnText: "Call Now",
      btnIcon: <TbPhone />,
      color: "#ffe66d",
      overlay:
        "linear-gradient(135deg, rgba(179, 25, 127, 0.9) 0%, rgba(255,217,61,0.85) 100%)",
    },
  ];

  return (
    <div className="modern-hero-container">
      {/* Hero Banner Section - Modern Design with Background Images */}
      <motion.section
        className="modern-banner-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          navigation={!isMobile}
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
          className="modern-hero-swiper"
          ref={swiperRef}
        >
          {bannerSlides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div
                className="modern-slide-content"
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* Color Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: slide.overlay,
                    zIndex: 1,
                  }}
                />

                <div
                  className="modern-slide-grid"
                  style={{ position: "relative", zIndex: 2 }}
                >
                  {/* Left Content */}
                  <motion.div
                    className="modern-slide-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="discount-badge">{slide.discount}</span>
                    <h1>
                      {slide.title}{" "}
                      <span style={{ color: slide.color }}>
                        {slide.subtitle}
                      </span>
                    </h1>
                    <p className="slide-description">{slide.description}</p>

                    <div className="slide-price-section">
                      <div className="price-container">
                        <span className="current-price">{slide.price}</span>
                        <span className="original-price">
                          {slide.originalPrice}
                        </span>
                      </div>
                      <motion.button
                        className="modern-order-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ color: slide.color }}
                      >
                        {slide.btnIcon}
                        {slide.btnText}
                      </motion.button>
                    </div>

                    {/* Features */}
                    <div className="slide-features">
                      <div className="feature">
                        <TbClock />
                        <span>30 min delivery</span>
                      </div>
                      <div className="feature">
                        <TbDiscount />
                        <span>Free delivery</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Image - Empty for background design */}
                  <motion.div
                    className="modern-slide-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {/* Optional: Add a small decorative element here if needed */}
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* Popular Items Section - Modern Cards */}
      <section className="modern-popular-section">
        <div className="section-header-modern">
          <div>
            <span className="section-tag">Popular Items</span>
            <h2 className="section-title-modern">Most Loved Dishes</h2>
          </div>

          <div className="slider-arrows">
            <button
              onClick={Prev}
              className={`arrow-btn ${next === 0 ? "disabled" : ""}`}
              disabled={next === 0}
            >
              <GrFormPreviousLink />
            </button>
            <button
              onClick={MoveNext}
              className={`arrow-btn ${next >= Math.ceil(cards.length / Math.floor(itemsPerView)) - 1 ? "disabled" : ""}`}
              disabled={
                next >= Math.ceil(cards.length / Math.floor(itemsPerView)) - 1
              }
            >
              <GrFormNextLink />
            </button>
          </div>
        </div>

        <div className="popular-slider-container">
          <motion.div
            className="popular-grid-modern"
            style={{
              transform: `translateX(-${next * (100 / itemsPerView)}%)`,
            }}
          >
            {cards.map((item, index) => (
              <motion.div
                key={index}
                className="modern-food-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="card-image-wrapper">
                  <img src={item.img} alt={item.title} />
                  <button
                    className="like-btn"
                    onClick={() => toggleLike(index)}
                  >
                    {likedItems[index] ? <FaHeart /> : <FaRegHeart />}
                  </button>
                  <span className="card-discount">-20%</span>
                </div>

                <div className="card-content">
                  <h3>{item.title}</h3>
                  <div className="rating">
                    <TbStar />
                    <TbStar />
                    <TbStar />
                    <TbStar />
                    <TbStar />
                    <span>(120+)</span>
                  </div>
                  <div className="card-footer">
                    <span className="card-price">₹199</span>
                    <button className="add-to-cart-btn">
                      <HiShoppingCart />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Food Items Grid - Modern Design */}
      <section className="modern-food-grid-section">
        <div className="section-header-modern">
          <div>
            <span className="section-tag">Our Menu</span>
            <h2 className="section-title-modern">Delicious Food Items</h2>
          </div>
        </div>

        <div className="food-grid-modern">
          {FoodItem.map((item, index) => (
            <motion.div
              key={index}
              className="modern-food-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="card-image-wrapper">
                <img src={item.img} alt={item.title} />
                <span className="card-discount">-15%</span>
              </div>

              <div className="card-content">
                <h3>{item.title}</h3>
                <p className="item-description">
                  Delicious food with special spices
                </p>
                <div className="card-footer">
                  <span className="card-price">{item.price}</span>
                  <button className="add-to-cart-btn">
                    <a href="tel:+919387300323">
                      <HiShoppingCart />
                    </a>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cold Drinks Section - Modern Design */}
      <section className="modern-drinks-section">
        <div className="drinks-header">
          <h2>
            Refresh Your Day with <span>Cold Drinks</span>
          </h2>
          <p>Choose from our wide range of refreshing beverages</p>
        </div>

        <div className="drinks-grid-modern">
          {coldDrinkItem.map((item, index) => (
            <motion.div
              key={index}
              className="modern-drink-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="drink-image-wrapper">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="drink-content">
                <h3>{item.title}</h3>
                <p className="drink-size">500ml</p>
                <div className="drink-footer">
                  <span className="drink-price">{item.price}</span>
                  <button className="drink-order-btn">
                    <a href="tel:+919387300323">
                      <IoMdCall />
                    </a>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section - Modern Cards */}
      <section className="modern-features">
        <div className="features-grid">
          <div className="feature-card-modern">
            <div className="feature-icon" style={{ background: "#ffebee" }}>
              <TbTruckDelivery style={{ color: "#ff6b6b" }} />
            </div>
            <h3>Free Delivery</h3>
            <p>Free delivery on orders above ₹199</p>
          </div>

          <div className="feature-card-modern">
            <div className="feature-icon" style={{ background: "#e8f5e9" }}>
              <TbDiscount style={{ color: "#4caf50" }} />
            </div>
            <h3>Special Offers</h3>
            <p>Get 20% off on first order</p>
          </div>

          <div className="feature-card-modern">
            <div className="feature-icon" style={{ background: "#fff3e0" }}>
              <TbClock style={{ color: "#ff9800" }} />
            </div>
            <h3>Fast Delivery</h3>
            <p>Delivery in 30 minutes or less</p>
          </div>
        </div>
      </section>

      {/* About Section - Modern Design */}
      <section className="modern-about">
        <div className="about-grid">
          <div className="about-image-modern">
            <img src={slideImage} alt="About" />
            <div className="experience-badge">
              <span className="years">10+</span>
              <span>Years Experience</span>
            </div>
          </div>

          <div className="about-content-modern">
            <span className="about-tag">About Us</span>
            <h2>
              Where Quality Meets <span>Excellent Service</span>
            </h2>
            <p className="about-description">
              We're passionate about serving delicious food made with fresh
              ingredients. Our chefs create mouth-watering dishes that will make
              you come back for more.
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Food Items</span>
              </div>
              <div className="stat">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">30min</span>
                <span className="stat-label">Delivery Time</span>
              </div>
            </div>

            <button className="about-btn-modern">Learn More About Us</button>
          </div>
        </div>
      </section>

      {/* Promo Banners */}
      <section className="promo-banners">
        <div className="promo-grid">
          <img src={PopularBannerOne} alt="Promo 1" />
          <img src={PopularBannerTow} alt="Promo 2" />
        </div>
      </section>

      {/* Payment Methods */}
      <section className="payment-section">
        <h3>We Accept</h3>
        <div className="payment-icons">
          <img src={BannerImage} alt="UPI" />
          <img src={cash} alt="Cash" />
        </div>
      </section>

      {/* Delivery CTA */}
      <section className="delivery-cta">
        <div className="cta-content">
          <h2>Hungry? Order Now!</h2>
          <p>Get your favorite food delivered in 45 minutes</p>
          <button className="cta-btn">
            <a href="tel:+919387300323">
              {" "}
              <span>
                <TbTruckDelivery />
              </span>
              Order Now
            </a>
          </button>
        </div>
        <div className="cta-image">
          <img src={deliveryMan} alt="Delivery" />
        </div>
      </section>
    </div>
  );
}
