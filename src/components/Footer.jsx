import "../styles/Footer.css";
import { Link } from "react-router-dom";
<li>
  <Link to="/location">Location</Link>
</li>
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
  <div className="footer-top container">
    {/* Left: Contact box */}
    <div className="footer-col contact-box-col">
      <div className="contact-box">
        <h4>Contact</h4>
        <ul className="contact-list">
          <li className="home-list">
            <i className="fas fa-home"></i> Janapath Tole, Biratnagar, Nepal
          </li>
          <li>
            <i className="fas fa-phone"></i> +977 21 471609
          </li>
          <li>
            <i className="fas fa-envelope"></i> krishnaganga@gmail.com
          </li>
        </ul>
      </div>
    </div>

    {/* Center: Useful Links */}
    <div className="footer-col links">
      <h3>Quick links</h3>
      <ul>
        <li>
          <a
            href="http://localhost:5173/"
            rel="noopener noreferrer"
            target="_blank"
          >
          HOME
          </a>
        </li>
        <li>
          <a
            href="http://localhost:5173/about-us"
            rel="noopener noreferrer"
            target="_blank"
          >
          ABOUT US
          </a>
        </li>
        
        <li>
          <a
            href="http://localhost:5173/treatment"
           
            rel="noopener noreferrer"
            target="_blank"
          >
           TREATMENT
          </a>
        </li>
        
        
         <li>
        <a href="http://localhost:5173/fee">
      FEE
        </a>
      </li>
      <li>
        <a href="http://localhost:5173/banned-items">
      BANNED ITEMS
        </a>
      </li>
      <li>
        <a href="http://localhost:5173/duration">
     DURATION
        </a>
      </li>
      <li>
        <a href="http://localhost:5173/contact-us">
     CONTACT US 
        </a>
      </li>
      <li>
          <a
            href="http://localhost:5173/location"
            rel="noopener noreferrer"
            target="_blank"
          >
           LOCATION
          </a>
        </li>

      </ul>
    </div>
      {/* Center: Useful Links */}
    <div className="footer-col links">
      <h3>Useful Links</h3>
      <ul>
        <li>
          <a
            href="https://www.neurohospital.com.np/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Neuro Hospital, Biratnagar
          </a>
        </li>
        <li>
          <a
            href="http://www.swc.org.np/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Social Welfare Council
          </a>
        </li>
        <li>
          <a
            href="https://ncb.nepalpolice.gov.np/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Narcotics Control Bureau
          </a>
        </li>
        <li>
          <a
            href="https://www.mofa.gov.np/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ministry of Foreign Affairs
          </a>
        </li>
        
         
      </ul>
    </div>

    {/* Right: About Us */}
    <div className="footer-col about">
      <h3>
        <a href="/">About Us</a>
      </h3>
      <p>
        Situated in the heart city of Biratnagar, HOPE TRUST, Krishna Ganga
        Drug &amp; Alcohol Deaddiction &amp; Rehabilitation Center.
      </p>
    </div>
  </div>

  


  {/* Footer bottom */}
  <div className="footer-bottom">
    <div className="container bottom-inner">
      <p>
        &copy; Copyright {new Date().getFullYear()}, All Rights Reserved by Krishna Ganga HOPE TRUST.
      </p>
      <p className="credit">
        Site By: <a href="#">Pracas Infosys</a>
      </p>
    </div>
  </div>
</footer>

  );
 
}
