import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-top container">
        <div className="footer-col about">
          <h3>
            <a href="/">About Us</a>
          </h3>
          <p>
            Situated in the heart city of Biratnagar, HOPE TRUST, Krishna Ganga
            Drug &amp; Alcohol Deaddiction &amp; Rehabilitation Center.
          </p>

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
        <div className="footer-col links">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a
                href="https://www.neurohospital.com.np/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Neuro Hospital,Biratnagar
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
        <div className="footer-col map">
          <div className="map-container">
            <div className="embed-container">
              <iframe
                title="Krishna Ganga Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.0631189244746!2d87.27099071449213!3d26.45369428606887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef744541d01bd3%3A0x57b7ceeeaf08f255!2sJanpath+Tole%2C+Biratnagar+56613%2C+Nepal!5e0!3m2!1sen!2snp!4v1469605031516"
                frameBorder="0"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p>
            {" "}
            &copy; Copyright {year}, All Rights Reserved by Krishna Ganga HOPE
            TRUST.
          </p>
          <p className="credit">
            Site By: <a href="#">Pracas Infosys</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
