import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./MessageBox.css";

export default function MessageBox({ to = "krishnagarg2@gmail.com" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  const [open, setOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name")?.toString().trim();
    const email = form.get("email")?.toString().trim();
    const message = form.get("message")?.toString().trim();
    const subject = `New message from ${name || "website"}`;
    const body = encodeURIComponent(
      `From: ${name || "Anonymous"} <${email || ""}>)\n\n${message || ""}`
    );
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  }

  if (!mounted) return null;

  return createPortal(
    <section className="message-section">
      <button
        type="button"
        aria-label={open ? "Close message box" : "Open message box"}
        onClick={() => setOpen((v) => !v)}
        className="message-box-button"
      >
        {open ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-comment"></i>
        )}
      </button>

      {open && (
        <div role="dialog" aria-modal="true" className="message-dialog-box">
          <h4 style={{ margin: "4px 0 12px" }}>Chat with Us</h4>
          <p style={{ marginTop: 0, color: "#888", fontSize: 13 }}>
            We typically reply in a few minutes.
          </p>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
            <input name="name" placeholder="Your name" className="inputStyle" />
            <input
              name="email"
              type="email"
              placeholder="Email (optional)"
              className="inputStyle"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Type your message..."
              className="textareaStyle"
              required
            />
            <button type="submit" className="buttonStyle">
              Send
            </button>
          </form>
          <div className="phone">Prefer phone? Call: 021-475089</div>
        </div>
      )}
    </section>,
    document.body
  );
}
