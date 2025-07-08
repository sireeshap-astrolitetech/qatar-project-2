import React from "react";
import "./MainContent.css";

import veggiesIcon from "./veggies2.avif";
import TubersIcon from "./Tubers4.jpg";
import FishIcon from "./Fish3.jpg";
import FruitsIcon from "./Fruits2.jpg";
import MeatIcon from "./Meat2.jpg";
import plusIcon from "./plus.png";
import CabageeIcon from "./cabagee2.jpg";
import KaleIcon from "./kale3.avif";
import BrocolyIcon from "./Brocoly3.jpg";
import CeleryIcon from "./Celery.jpg";
import LogoIcon from "./logo.png";
import { Plus } from "lucide-react";

import Pieicon3 from "./icons8-330-degrees-30.png";
import Pieicon1 from "./icons8-150-degrees-24.png";
import PieIcon2 from "./icons8-225-degrees-50.png";

import vegetablesBasket from "./vegetables-basket.png";

import fashionImage from "./Fashion4.avif";
import mobilesImage from "./Mobiles33.png";
import officeImage from "./Printer2.png";
import computersImage from "./Computers4.jpg";

function MainContent({ isDarkMode }) {
  return (
    <main className="main-content">
      <div className="main-content-scrollable">
        <div className="main-content-columns">
          <div className="categories-products-column">
            <section
              style={{ background: "transparent", padding: "0px" }}
              className={` dashboard-section ${isDarkMode ? "dark-card" : ""}`}
            >
              <div className="discount-banner">
                <div className="discount-content">
                  <h2 className="discount-title">Get special discounts</h2>
                  <p className="discount-percentage">up to 45%</p>
                  <p className="discount-description">
                    Enjoy our vegetables at a discount price
                  </p>
                </div>
                <div className="discount-image-container">
                  <img
                    src={vegetablesBasket}
                    alt="Basket of Vegetables"
                    className="discount-image"
                  />
                </div>
                <button className="use-now-button">Use Now</button>
              </div>
            </section>

            <section
              className={`dashboard-section ${isDarkMode ? "dark-card" : ""}`}
            >
              <div
                className="shop-by-department-section"
                style={{
                  backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                  color: isDarkMode ? "#f1f5f9" : "#1f2937",
                  borderRadius: "10px",
                  padding: "0px",
                }}
              >
                <div className="department-header">
                  <h2
                    className="department-title"
                    style={{ color: isDarkMode ? "#f8fafc" : "#1e293b" }}
                  >
                    Popular Categories
                  </h2>

                  <a href="#" className="see-all-link">
                    View All
                  </a>
                </div>
                <div className="department-list">
                  {/* Department Item 1: Vegetables */}
                  <div className="department-item">
                    <div className="department-image-wrapper">
                      <img
                        src={vegetablesBasket}
                        alt="Vegetables Department"
                        className="department-image"
                      />
                    </div>
                    <p className="department-name">Vegetables</p>
                  </div>

                  {/* Department Item 2: Fashion */}
                  <div className="department-item">
                    <div className="department-image-wrapper">
                      <img
                        src={fashionImage}
                        alt="Fashion Department"
                        className="department-image"
                      />
                    </div>
                    <p className="department-name">Fashion</p>
                  </div>

                  {/* Department Item 3: Mobiles */}
                  <div className="department-item">
                    <div className="department-image-wrapper">
                      <img
                        src={mobilesImage}
                        alt="Mobiles Department"
                        className="department-image"
                      />
                    </div>
                    <p className="department-name">Mobiles</p>
                  </div>

                  {/* Department Item 4: Office */}
                  <div className="department-item">
                    <div className="department-image-wrapper">
                      <img
                        src={officeImage}
                        alt="Office Department"
                        className="department-image"
                      />
                    </div>
                    <p className="department-name">Office</p>
                  </div>

                  {/* Department Item 5: Computers */}
                  <div className="department-item">
                    <div className="department-image-wrapper">
                      <img
                        src={computersImage}
                        alt="Computers Department"
                        className="department-image"
                      />
                    </div>
                    <p className="department-name">Computers</p>
                  </div>
                </div>
              </div>
            </section>

            <section
              className={`dashboard-section ${isDarkMode ? "dark-card" : ""}`}
            >
              <div className="categories-header">
                <h2 className="section-header">Categories and Stock</h2>
                <button className="filter-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-funnel-fill"
                    viewBox="0 0 16 16"
                    className="filter-icon"
                  >
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
                  </svg>
                  Filter
                </button>
              </div>
              <div className="category-grid">
                <div className="category-card active">
                  <img
                    src={`https://img.icons8.com/?size=100&id=Dmnn0Y9PAFKY&format=png&color=${
                      isDarkMode ? "40C057" : "000000"
                    }`}
                    alt="Veggies"
                    width={60}
                    height={60}
                  />

                  <p
                    className="category-stock"
                    style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
                  >
                    1.890 stock
                  </p>
                  <p
                    className="category-name"
                    style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
                  >
                    Veggies
                  </p>
                </div>
                <div className="category-card">
                  <img
                    src="https://img.icons8.com/?size=100&id=108475&format=png&color=40C057"
                    alt="Tubers"
                    width={60}
                    height={60}
                  />
                  <p className="category-stock">2.040 stock</p>
                  <p className="category-name">Tubers</p>
                </div>
                <div className="category-card">
                  <img
                    src="https://img.icons8.com/?size=100&id=9238&format=png&color=40C057"
                    alt="Fish"
                    width={60}
                    height={60}
                  />
                  <p className="category-stock">548 stock</p>
                  <p className="category-name">Fish</p>
                </div>
                <div className="category-card">
                  <img
                    src="https://img.icons8.com/?size=100&id=10107&format=png&color=40C057"
                    alt="Fruits"
                    width={60}
                    height={60}
                  />
                  <p className="category-stock">300 stock</p>
                  <p className="category-name">Fruits</p>
                </div>
                <div className="category-card">
                  <img
                    src="https://img.icons8.com/?size=100&id=95681&format=png&color=40C057"
                    alt="Meat"
                    width={60}
                    height={60}
                  />
                  <p className="category-stock">236 stock</p>
                  <p className="category-name">Meat</p>
                </div>
              </div>
            </section>

            {/* Popular Product */}
            <section
              className={`dashboard-section ${isDarkMode ? "dark-card" : ""}`}
            >
              <div className="popular-products-header">
                <h2 className="section-header">Popular Product</h2>
                <a href="#" className="see-all-link">
                  See All
                </a>
              </div>
              <div className="product-grid">
                {/* Product Card - Cabbage */}
                <div className="product-card">
                  <img src={CabageeIcon} alt="Cabbage" width={70} height={70} />
                  <p className="product-name">Cabbage</p>
                  <div style={{ display: "flex" }}>
                    <p className="product-price">
                      $15.10 <span className="product-price-unit">/Kg</span>
                    </p>
                    <Plus
                      size={15}
                      color="white"
                      strokeWidth={2.5}
                      style={{
                        marginLeft: "15px",
                        backgroundColor: "#4CAF50",
                        marginTop: "-10px",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />
                  </div>
                </div>
                {/* Product Card - Kale vegetables */}
                <div className="product-card">
                  <img
                    src={KaleIcon}
                    alt="Kale vegetables"
                    width={70}
                    height={70}
                  />
                  <p className="product-name">Kale vegetables</p>
                  <div style={{ display: "flex" }}>
                    <p className="product-price">
                      $8.34 <span className="product-price-unit">/Kg</span>
                    </p>
                    <Plus
                      size={15}
                      color="white"
                      strokeWidth={2.5}
                      style={{
                        marginLeft: "15px",
                        backgroundColor: "#4CAF50",
                        marginTop: "-10px",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />
                  </div>
                </div>
                {/* Product Card - Brocoly */}
                <div className="product-card">
                  <img src={BrocolyIcon} alt="Brocoly" width={70} height={70} />
                  <p className="product-name">Brocoly</p>
                  <div style={{ display: "flex" }}>
                    <p className="product-price">
                      $5.60 <span className="product-price-unit">/Kg</span>
                    </p>
                    <Plus
                      size={15}
                      color="white"
                      strokeWidth={2.5}
                      style={{
                        marginLeft: "15px",
                        backgroundColor: "#4CAF50",
                        marginTop: "-10px",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />
                  </div>
                </div>
                {/* Product Card - Celery */}
                <div className="product-card">
                  <img src={CeleryIcon} alt="Celery" width={70} height={70} />
                  <p className="product-name">Celery</p>
                  <div style={{ display: "flex" }}>
                    <p className="product-price">
                      $4.80 <span className="product-price-unit">/Kg</span>
                    </p>
                    <Plus
                      size={15}
                      color="white"
                      strokeWidth={2.5}
                      style={{
                        marginLeft: "15px",
                        backgroundColor: "#4CAF50",
                        marginTop: "-10px",
                        borderRadius: "50%",
                        padding: "5px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="income-notifications-column">
            {/* Income Section */}
            {/* <div style={{ display: "flex" }}>
              <section
                className={`dashboard-section ${isDarkMode ? "dark-card" : ""}`}
                style={{ width: "170px" }}
              >
                <h2 className="section-header">Referral Income</h2>
                <div
                  className="income-cards-grid"
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    fontSize: "28px",
                  }}
                >
                  $97.66
                </div>
              </section>
              <button
                style={{
                  margin: "10px",
                  height: "40px",
                  width: "100px",
                  marginTop: "35px",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  backgroundColor: "#84C6BB",
                  border: "none",
                }}
              >
                Refer Now
              </button>
            </div> */}
            {/* Notification */}
            <section
              className={`dashboard-section ${isDarkMode ? "dark-card" : ""}`}
              style={{ border: "1px solid green", padding: "20px" }}
            >
              <h2 className="section-header" style={{ paddingBottom: "-20px" }}>
                Your Cart
              </h2>
              <div className="space-y-4">
                {" "}
                <div
                  className="notification-item"
                  style={{ paddingTop: "-50px" }}
                >
                  <div>
                    <img
                      src={CabageeIcon}
                      alt="Cabbage"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <h2>Cabagee</h2>
                    <p
                      style={{
                        marginTop: "-10px",
                        color: "gray",
                        fontSize: "14px",
                        marginLeft: "12px",
                      }}
                    >
                      2 x $15.10{" "}
                    </p>
                  </div>
                </div>
                <div className="notification-item">
                  <div>
                    <img
                      src={BrocolyIcon}
                      alt="Brocoly"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div style={{ marginLeft: "30px" }}>
                    <h1>Brocoly</h1>
                    <p
                      style={{
                        marginTop: "-10px",
                        color: "gray",
                        fontSize: "14px",
                        marginLeft: "12px",
                      }}
                    >
                      4 x $8.34{" "}
                    </p>
                  </div>
                </div>
                <div className="notification-item">
                  <div>
                    <p
                      style={{
                        color: "gray",
                        marginTop: "20px",
                        marginLeft: "10px",
                      }}
                    >
                      Sub Total:
                    </p>
                  </div>
                  <div>
                    <p style={{ marginLeft: "50px", fontWeight: "bold" }}>
                      $62.00
                    </p>
                  </div>
                </div>
                <div style={{ marginTop: "30px" }}>
                  <button
                    style={{
                      height: "50px",
                      width: "150px",
                      backgroundColor: "black",
                      color: "white",
                      fontWeight: "700",
                      fontSize: "16px",
                      borderRadius: "10px",
                      border: "none",
                    }}
                  >
                    VIEW CART
                  </button>
                  <button
                    style={{
                      height: "50px",
                      width: "150px",
                      backgroundColor: "#587d6a",
                      color: "white",
                      fontWeight: "700",
                      fontSize: "16px",
                      borderRadius: "10px",
                      border: "none",
                      marginLeft: "-18px",
                    }}
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            </section>

            {/* Latest Order */}
            <section
              className={`dashboard-section ${isDarkMode ? "dark-card" : ""}`}
              style={{ border: "1px solid green" }}
            >
              <h3 style={{ marginBottom: "10px" }}>FIND US ON GOOGLE MAP</h3>
              <div
                style={{ position: "relative", width: "100%", height: "250px" }}
              >
                <div
                  style={{
                    position: "absolute",

                    backgroundColor: "#fff",
                    padding: "10px",
                    borderRadius: "6px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                    zIndex: 10,
                    maxWidth: "250px",
                    fontSize: "14px",
                  }}
                >
                  <strong>Chiesa di San Francesco</strong>
                  <br />
                  Piazza S. Francesco, 55100 Lucca LU, Italy
                  <br />⭐ 4.5 (944 reviews)
                </div>

                {/* Map iframe */}
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.711985616634!2d10.4743383!3d43.8420964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132aab6e8d8f1c05%3A0x317b550f3b22734c!2sChiesa%20di%20San%20Francesco%2C%2051010%20Lucca%20LU%2C%20Italy!5e0!3m2!1sen!2sin!4v1626590241234!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "6px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
