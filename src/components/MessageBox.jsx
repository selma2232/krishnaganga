import { useState } from "react";
import { FaComment, FaTimes, FaPhone, FaWhatsapp } from "react-icons/fa";
import "../styles/MessageBox.css";

export default function MessageBox({ to = "krishnagarg2@gmail.com" }) {
  const [open, setOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name")?.toString().trim();
    const email = form.get("email")?.toString().trim();
    const message = form.get("message")?.toString().trim();

    const subject = `New message from ${name || "website"}`;
    const body = encodeURIComponent(
      `From: ${name || "Anonymous"} <${email || ""}>\n\n${message || ""}`
    );

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  }

  return (
    <>
      {/* Floating Button Stack */}
      <div className="message-wrapper">

        {/* Chat Toggle Button */}
        <button
          type="button"
          aria-label={open ? "Close chat" : "Open chat"}
          onClick={() => setOpen((v) => !v)}
          className="floating-btn chat-btn"
        >
          {open ? <FaTimes size={20} /> : <FaComment size={20} />}
        </button>

        {/* Call Button */}
        <a
          href="tel:021475089"
          className="floating-btn call-btn"
          aria-label="Call us"
        >
          <FaPhone size={20} />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/97721475089"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp-btn"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={20} />
        </a>
      </div>

      {/* Chat Popup */}
      {open && (
        <div className="message-dialog-box">
          <h4>Chat with Us</h4>
          <p className="chat-sub">
            We typically reply within a few minutes.
          </p>

          <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Your name" />
            <input
              name="email"
              type="email"
              placeholder="Email (optional)"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Type your message..."
              required
            />
            <button type="submit" className="send-btn">
              Send
            </button>
          </form>

          <div className="phone-text">
            Prefer phone? Call: 021-475089
          </div>
        </div>
      )}
    </>
  );
}