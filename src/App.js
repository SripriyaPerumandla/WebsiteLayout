import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  FaHome,
  FaInfo,
  FaServicestack,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./styles.css";

// Lazy load components
const Home = lazy(() => import("./Components/Home"));
const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));
const Design = lazy(() => import("./Components/Design"));
const Marketing = lazy(() => import("./Components/Marketing"));
const Services = lazy(() => import("./Components/Services"));

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(true); // Sidebar initially open
  const [servicesOpen, setServicesOpen] = useState(false); // Submenu for "Services"

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  return (
    <Router>
      <div className="app">
        {/* Sidebar */}
        <div
          className={`sidebar ${drawerOpen ? "open" : "closed"}`}
          style={{ width: drawerOpen ? "240px" : "70px" }}
        >
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <FaHome className="menu-icon" />
                  {drawerOpen && "Home"}
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <FaInfo className="menu-icon" />
                  {drawerOpen && "About Us"}
                </Link>
              </li>
              <li>
                <button className="submenu-toggle" onClick={toggleServices}>
                  <FaServicestack className="menu-icon" />
                  {drawerOpen && `Services ${servicesOpen ? "▲" : "▼"}`}
                </button>
                {servicesOpen && drawerOpen && (
                  <ul className="submenu">
                    <li>
                      <Link to="/services/design">Design</Link>
                    </li>
                    <li>
                      <Link to="/services/marketing">Marketing</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/contact">
                  <FaEnvelope className="menu-icon" />
                  {drawerOpen && "Contact Us"}
                </Link>
              </li>
            </ul>
          </nav>
          {/* Hamburger Icon at Bottom */}
          {!drawerOpen && (
            <button className="toggle-button" onClick={toggleDrawer}>
              <FaBars />
            </button>
          )}
          {/* Close Sidebar Icon */}
          {drawerOpen && (
            <button className="toggle-button" onClick={toggleDrawer}>
              <FaTimes />
            </button>
          )}
        </div>

        {/* Main Content */}
        <div
          className="main-content"
          style={{ marginLeft: drawerOpen ? "240px" : "70px" }}
        >
          {/* Top Navbar */}
          <header className="topbar">
            <span className="app-title">🌸 FlowerApp</span>
            <div className="account-menu">
              <button className="account-button">⚙</button>
              <div className="account-dropdown">
                <Link to="#">Privacy Policy</Link>
                <Link to="#">Cookie Policy</Link>
                <Link to="#">Logout</Link>
              </div>
            </div>
          </header>

          {/* Routes */}
          <div className="content-area">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />}>
                  {/* Correct nested paths */}
                  <Route path="design" element={<Design />} />
                  <Route path="marketing" element={<Marketing />} />
                </Route>
              </Routes>
            </Suspense>
          </div>

          {/* Footer */}
          <footer className="footer">Made with 🌺 by FlowerApp Team</footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
