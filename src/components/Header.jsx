import "../styles/Header.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";

function Header({ onSearch }) {
  return (
    <>
      <header>
        <div className="topbar">
          <div className="container">
            <img src={logo} alt="logo" className="logo" />
            <div className="top-actions">
              <nav className="socials">
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://google.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-google"></i>
                </a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-pinterest"></i>
                </a>
              </nav>

              {/* DESKTOP CTA */}
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

        <div className="navbar">
          <div className="container nav-inner">
            <button id="nav-toggle" className="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>

            <nav className="nav">
              <NavLink to="/" end>HOME</NavLink>
              <NavLink to="/about-us">ABOUT US</NavLink>
              <NavLink to="/treatment">TREATMENT</NavLink>
              <NavLink to="/fee">FEE</NavLink>
              <NavLink to="/banned-items">BANNED ITEMS</NavLink>
              <NavLink to="/duration">DURATION</NavLink>
              <NavLink to="/contact-us">CONTACT US</NavLink>
            </nav>

            <SearchBox onSearch={onSearch} />
          </div>
        </div>
      </header>

     
    </>
  );
}

export default Header;
