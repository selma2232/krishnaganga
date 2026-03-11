import { useState } from "react";
import "../styles/Header.css";
const logo = "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="navbar">
        <div className="container nav-inner">

          {/* Hamburger */}
          <button className="nav-toggle" onClick={toggleMenu}>
            <HiOutlineMenu size={24} />
          </button>

          {/* Logo */}
          <img src={logo} alt="logo" className="logo" />

          {/* Navigation */}
          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <NavLink to="/" end onClick={closeMenu}>HOME</NavLink>
            <NavLink to="/about-us" onClick={closeMenu}>ABOUT</NavLink>
            <NavLink to="/treatment" onClick={closeMenu}>TREATMENT</NavLink>
            <NavLink to="/fee" onClick={closeMenu}>FEE</NavLink>
            <NavLink to="/banned-items" onClick={closeMenu}>BANNED ITEMS</NavLink>
            <NavLink to="/duration" onClick={closeMenu}>DURATION</NavLink>
            <NavLink to="/contact-us" onClick={closeMenu}>CONTACT</NavLink>
          </nav>

          {/* Buttons */}
          <div className="cta">
            <NavLink to="/donate" className="btn-old">
              DONATE US
            </NavLink>
            <NavLink to="/volunteer" className="btn-old">
              VOLUNTEER
            </NavLink>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;