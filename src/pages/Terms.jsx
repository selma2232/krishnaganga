import "../styles/Legal.css";

import "../styles/Legal.css";

export default function Privacy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <p className="updated">Last Updated: {new Date().getFullYear()}</p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal information such as your name, phone number,
          or email address when you contact us or use our services.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          The information collected is used to respond to inquiries, provide
          services, and improve our website and support systems.
        </p>

        <h2>3. Data Protection</h2>
        <p>
          We take reasonable measures to protect your personal information
          from unauthorized access, misuse, or disclosure.
        </p>

        <h2>4. Third-Party Links</h2>
        <p>
          Our website may contain links to external websites. We are not
          responsible for the privacy practices of third-party websites.
        </p>

        <h2>5. Your Consent</h2>
        <p>
          By using our website, you consent to our Privacy Policy.
        </p>

        <h2>6. Contact Us</h2>
        <p>
          If you have questions regarding this Privacy Policy,
          please contact us at krishnaganga@gmail.com.
        </p>
      </div>
    </div>
  );
}