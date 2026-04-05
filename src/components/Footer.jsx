import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const logo = "../assets/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubscribe(e) {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      const res = await fetch("https://formspree.io/f/xjgardvy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("Thank you for subscribing!");
        setEmail("");
      } else {
        throw new Error();
      }
    } catch {
      setStatus("Subscription failed. Try again.");
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-top container">

        {/* Column 1 */}
        <div className="footer-col about">
          <div className="footer-logo">
            <img src={logo} alt="Krishna Ganga HOPE TRUST" />
          </div>

          <p>
            Situated in the heart city of Biratnagar, HOPE TRUST,
            Krishna Ganga Drug & Alcohol Deaddiction &
            Rehabilitation Center.
          </p>

          <ul className="contact-list">
            <li>
              <i className="fas fa-home"></i>
              Janapath Tole, Biratnagar, Nepal
            </li>

            <a href="tel:+97721471609" className="phone-link">
              <i className="fas fa-phone"></i> +977 21 471609
            </a>

            <li>
              <i className="fas fa-envelope"></i>
              krishnaganga@gmail.com
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-col links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/treatment">Treatment</Link></li>
            <li><Link to="/fee">Fee</Link></li>
            <li><Link to="/banned-items">Banned Items</Link></li>
            <li><Link to="/duration">Durations</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/location">Location</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col useful">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="https://www.neurohospital.com.np/" target="_blank" rel="noopener noreferrer">
                Neuro Hospital, Biratnagar
              </a>
            </li>
            <li>
              <a href="http://www.swc.org.np/" target="_blank" rel="noopener noreferrer">
                Social Welfare Council
              </a>
            </li>
            <li>
              <a href="https://ncb.nepalpolice.gov.np/" target="_blank" rel="noopener noreferrer">
                Narcotics Control Bureau
              </a>
            </li>
            <li>
              <a href="https://www.mofa.gov.np/" target="_blank" rel="noopener noreferrer">
                Ministry of Foreign Affairs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col newsletter">
          <h3>Newsletter</h3>
          <p>
            Subscribe to our weekly Newsletter and receive updates via email.
          </p>

          <form className="newsletter-box" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Email*"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>

          {status && <p className="newsletter-status">{status}</p>}

          {/* SOCIALS */}
          <nav className="socials">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a href="https://biratinfo.com/" target="_blank" rel="noopener noreferrer">
  <i className="fas fa-b"></i>
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
        </div>

      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="container bottom-inner">

          <p className="copyright">
            &copy; {year} All Rights Reserved by Krishna Ganga HOPE TRUST. |
            {" "}Built with:{" "}
            <a href="https://broadpress.org/">Boardpress</a>
          </p>

          <div className="footer-bottom-links">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}