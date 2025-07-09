import React, { useState, useEffect } from "react";

import "./MainFrame.css";
import LogoIcon from "./TM logo.png";
import {
  Bell,
  Mail,
  ChevronDown,
  Sun,
  Moon,
  Maximize2,
  Minimize2,
  MessageCircle,
} from "lucide-react";
import MainContent from "../MainContent/MainContent";

import userImage from "./Userr.png";
import katharImage from "./Kathar3.jpg";
import { Menu, X } from "lucide-react";

import {
  Home,
  LayoutGrid,
  ShoppingCart,
  Heart,
  MessageSquare,
  HelpCircle,
  Settings,
  ClipboardList,
} from "lucide-react";

function MainFrame() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🌙 Toggle dark mode
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  // 🖥 Fullscreen logic
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <div className="main-frame">
      {/*  Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div>
          {/* Logo Section */}
          <div className="sidebar-logo-section mb-8 text-center">
            <div className="text-2xl font-bold text-gray-800 rounded-md p-2">
              <img
                src={LogoIcon}
                alt="Astrolite Logo"
                width={180}
                height={60}
                style={{ marginLeft: "20px", marginTop: "20px" }}
              />
            </div>
          </div>

          {/* Navigation */}
          <nav style={{ marginLeft: "-25px" }}>
            <ul className="list-none p-0 m-0" style={{ listStyle: "none" }}>
              <li
                className="nav-item mb-4"
                style={{
                  marginTop: "20px",
                  marginBottom: "-10px",
                  backgroundColor: "#b9f1df",
                  width: "200px",
                  borderRadius: "5px",

                  transition:
                    "background-color 0.2s, color 0.2s, border-right-color 0.2s",
                  borderRight: "5px solid green",
                }}
              >
                <a
                  href="#"
                  className="nav-link flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-200"
                  style={{ textDecoration: "none" }}
                >
                  <Home
                    className="w-6 h-6 mr-3"
                    style={{ marginRight: "10px", height: "30px" }}
                  />{" "}
                  {/* Lucide LayoutGrid icon */}
                  <span
                    className="text-lg"
                    style={{ fontSize: "20px", marginLeft: "10px" }}
                  >
                    Market
                  </span>
                </a>
              </li>

              <li
                className="nav-item mb-4"
                style={{ marginTop: "25px", width: "200px" }}
              >
                <a
                  href="#"
                  className="nav-link flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-200"
                  style={{ textDecoration: "none" }}
                >
                  <LayoutGrid
                    className="w-6 h-6 mr-3"
                    style={{ marginRight: "10px", height: "30px" }}
                  />{" "}
                  {/* Lucide LayoutGrid icon */}
                  <span
                    className="text-lg"
                    style={{ fontSize: "20px", marginLeft: "10px" }}
                  >
                    Categories
                  </span>
                </a>
              </li>

              <li className="nav-item mb-4">
                <a
                  href="#"
                  className="nav-link flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-200 relative"
                  style={{ textDecoration: "none" }}
                >
                  <ClipboardList
                    className="w-6 h-6 mr-3"
                    style={{ marginRight: "10px", height: "30px" }}
                  />{" "}
                  {/* Lucide ClipboardList icon */}
                  <span
                    className="text-lg"
                    style={{ fontSize: "20px", marginLeft: "10px" }}
                  >
                    Orders
                  </span>
                  {/* Badge for order count */}
                  <span className="order-badge absolute top-1 right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    3
                  </span>
                </a>
              </li>

              <li className="nav-item mb-4">
                <a
                  href="#"
                  className="nav-link flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-200"
                  style={{ textDecoration: "none" }}
                >
                  <Heart
                    className="w-6 h-6 mr-3"
                    style={{ marginRight: "10px", height: "30px" }}
                  />{" "}
                  {/* Lucide Heart icon */}
                  <span
                    className="text-lg"
                    style={{ fontSize: "20px", marginLeft: "10px" }}
                  >
                    Favourite
                  </span>
                </a>
              </li>

              <li className="nav-item mb-4">
                <a
                  href="#"
                  className="nav-link flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-200 relative"
                  style={{ textDecoration: "none" }}
                >
                  <ShoppingCart
                    className="w-6 h-6 mr-3"
                    style={{ marginRight: "10px", height: "30px" }}
                  />{" "}
                  {/* Lucide ShoppingCart icon */}
                  <span
                    className="text-lg"
                    style={{ fontSize: "20px", marginLeft: "10px" }}
                  >
                    Cart
                  </span>
                  {/* Badge for cart count */}
                  <span className="order-badge absolute top-1 right-1 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    8
                  </span>
                </a>
              </li>

              <li className="nav-item mb-4">
                <a
                  href="#"
                  className="nav-link flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-200"
                  style={{ textDecoration: "none" }}
                >
                  <MessageSquare
                    className="w-6 h-6 mr-3"
                    style={{ marginRight: "10px", height: "30px" }}
                  />{" "}
                  {/* Lucide MessageSquare icon */}
                  <span
                    className="text-lg"
                    style={{ fontSize: "20px", marginLeft: "10px" }}
                  >
                    Message
                  </span>
                </a>
              </li>

              <li className="nav-item mb-4">
                <a
                  href="#"
                  className="nav-link flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-200"
                  style={{ textDecoration: "none" }}
                >
                  <MessageSquare
                    className="w-6 h-6 mr-3"
                    style={{ marginRight: "10px", height: "30px" }}
                  />{" "}
                  {/* Lucide MessageSquare icon (used for feedback as well) */}
                  <span
                    className="text-lg"
                    style={{ fontSize: "20px", marginLeft: "10px" }}
                  >
                    Feedback
                  </span>
                </a>
              </li>

              <li className="nav-item mb-4">
                <a
                  href="#"
                  className="nav-link flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-200"
                  style={{ textDecoration: "none" }}
                >
                  <HelpCircle
                    className="w-6 h-6 mr-3"
                    style={{ marginRight: "10px", height: "30px" }}
                  />{" "}
                  {/* Lucide HelpCircle icon */}
                  <span
                    className="text-lg"
                    style={{ fontSize: "20px", marginLeft: "10px" }}
                  >
                    Help
                  </span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-200 transition-all duration-200"
                  style={{ textDecoration: "none" }}
                >
                  <Settings
                    className="w-6 h-6 mr-3"
                    style={{ marginRight: "10px", height: "30px" }}
                  />{" "}
                  {/* Lucide Settings icon */}
                  <span
                    className="text-lg"
                    style={{ fontSize: "20px", marginLeft: "10px" }}
                  >
                    Settings
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <aside className="mini-sidebar">
        <div className="sidebar-logo-section mb-8 text-center">
          <div className="text-2xl font-bold text-gray-800 rounded-md p-2">
            <img
              src={LogoIcon}
              alt="Astrolite Logo"
              width={90}
              height={30}
              style={{ marginTop: "10px" }}
            />
          </div>
        </div>

        <ul className="mini-nav-icons">
          <li style={{ marginTop: "-20px" }}>
            <div className="mini-icon-wrapper">
              <Home className="mini-icon" />
              <span className="mini-label">Market</span>
            </div>
          </li>
          <li>
            <div className="mini-icon-wrapper">
              <LayoutGrid className="mini-icon" />
              <span className="mini-label">Categories</span>
            </div>
          </li>
          <li>
            <div className="mini-icon-wrapper">
              <ClipboardList className="mini-icon" />
              <span className="mini-label">Orders</span>
            </div>
          </li>
          <li>
            <div className="mini-icon-wrapper">
              <Heart className="mini-icon" />
              <span className="mini-label">Favourite</span>
            </div>
          </li>
          <li>
            <div className="mini-icon-wrapper">
              <ShoppingCart className="mini-icon" />
              <span className="mini-label">Cart</span>
            </div>
          </li>
          <li>
            <div className="mini-icon-wrapper">
              <MessageSquare className="mini-icon" />
              <span className="mini-label">Message</span>
            </div>
          </li>
          <li>
            <div className="mini-icon-wrapper">
              <MessageSquare className="mini-icon" />
              <span className="mini-label">Feedback</span>
            </div>
          </li>
          <li>
            <div className="mini-icon-wrapper">
              <HelpCircle className="mini-icon" />
              <span className="mini-label">Help</span>
            </div>
          </li>
          <li>
            <div className="mini-icon-wrapper">
              <Settings className="mini-icon" />
              <span className="mini-label">Settings</span>
            </div>
          </li>
        </ul>
      </aside>

      {/* 🟦 Right Side (Header + Main Content) */}
      <div
        className={`right-section ${
          windowWidth >= 768 ? (isSidebarOpen ? "shifted" : "mini") : ""
        }`}
      >
        <header className="header">
          <div style={{ display: "flex" }}>
            <div
              className="hamburger md:hidden p-2"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              style={{
                marginTop: "20px",
                marginLeft: "20px",
                paddingTop: "15px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                style={{
                  backgroundColor: isDarkMode ? "#374151" : "#ffffff",
                  color: isDarkMode ? "white" : "black",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  marginTop: "-10px",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
              >
                {isSidebarOpen ? (
                  <X style={{ color: isDarkMode ? "white" : "black" }} />
                ) : (
                  <Menu style={{ color: isDarkMode ? "white" : "black" }} />
                )}
              </button>
            </div>

            <div
              className="buy-sell-buttons"
              style={{
                marginTop: "20px",
                backgroundColor: "#ffffff",
                padding: "10px",
                borderRadius: "10px",
                marginLeft: "10px",
              }}
            >
              <button className="buy-button">BUY</button>
              <button className="sell-button">SELL</button>
            </div>

            <div
              style={{ marginLeft: "50px", width: "200px", marginTop: "15px" }}
            >
              <p style={{ fontSize: "14px", color: "gray" }}>Hotline 24/7</p>
              <p
                style={{
                  marginTop: "-12px",
                  fontWeight: "700",
                  color: "blue",
                  fontSize: "18px",
                }}
              >
                (0X5) 3XXXX 16
              </p>
            </div>

            <div
              style={{
                marginLeft: "-40px",
                marginTop: "25px",
                marginRight: "20px",
              }}
            >
              <img src={userImage} alt="user Image" />
            </div>
          </div>
          <div
            className={`flex p-4 rounded-xl transition-all duration-300 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
            style={{
              display: "flex",
              background: isDarkMode ? "#1f2937" : "#ffffff",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <div className="search-bar-container" style={{ marginLeft: "0px" }}>
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <svg
                className="search-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <div className="header-actions">
              <Mail />
              <Bell
                className={`w-8 h-8 transition duration-200 cursor-pointer ${
                  isDarkMode
                    ? "text-white hover:text-yellow-300"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              />
              {/* <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                title="Toggle Dark Mode"
                style={{ border: "none" }}
              >
                {isDarkMode ? (
                  <Sun className="icon" />
                ) : (
                  <Moon className="icon" />
                )}
              </button> */}
              <Heart
                className="w-6 h-6 mr-3"
                style={{ marginRight: "10px", height: "30px" }}
              />
              <button
                onClick={toggleFullscreen}
                title="Toggle Fullscreen"
                style={{ border: "none" }}
              >
                {isFullScreen ? (
                  <Minimize2 className="icon" />
                ) : (
                  <Maximize2 className="icon" />
                )}
              </button>
              <div className="user-profile flex items-center space-x-2 cursor-pointer p-2 rounded-full hover:bg-gray-100 transition duration-200">
                <img
                  src={katharImage}
                  alt="user Image"
                  width={30}
                  height={30}
                  style={{
                    borderRadius: "50%",
                    border: `2px solid ${isDarkMode ? "#ffffff" : "#000000"}`,
                    padding: "2px",
                  }}
                />

                <span
                  className="user-name text-lg font-medium"
                  style={{ color: isDarkMode ? "white" : "#1f2937" }}
                >
                  Saikrupan
                </span>

                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>
        </header>
        <div
          style={{
            marginTop: "-30px",
            height: "calc(100vh - 120px)",
            overflowY: "auto",
          }}
        >
          <MainContent isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default MainFrame;
