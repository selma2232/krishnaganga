import "./Header.css";

import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      {/* Topbar */}
      <div className="topbar">
        <div className="container">
          <img src={logo} alt="logo" className="logo" />
          <div className="top-actions">
            <nav className="socials">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://google.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
              >
                <i className="fab fa-google"></i>
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </nav>
            <div className="cta">
              <NavLink to="/donate" className="btn outline">
                DONATE US
              </NavLink>
              <NavLink to="/volunteer" className="btn outline">
                VOLUNTEER
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <div className="container nav-inner">
          <button id="nav-toggle" className="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
          <nav className="nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/treatment"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              TREATMENT
            </NavLink>
            <NavLink
              to="/fee"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              FEE
            </NavLink>
            <NavLink
              to="/banned-items"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              BANNED ITEMS
            </NavLink>
            <NavLink
              to="/duration"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              DURATION
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              CONTACT US
            </NavLink>
          </nav>
          <div className="search">
            <input placeholder="Search Here" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
