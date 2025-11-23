import { useState } from "react";

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
      `From: ${name || "Anonymous"} <${email || ""}>)\n\n${message || ""}`
    );
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  }

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close message box" : "Open message box"}
        onClick={() => setOpen((v) => !v)}
        style={{
          position: "fixed",
          fontSize: 26,
          right: 20,
          top: "40%",
          transform: "translateY(-50%)",
          width: 56,
          height: 56,
          borderRadius: 28,
          border: "none",
          background: open ? "#444" : "#ff3b30",
          color: "#fff",
          boxShadow: "0 6px 16px rgba(0,0,0,.25)",
          cursor: "pointer",
          zIndex: 1001,
        }}
      >
        {open ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-comment"></i>
        )}
      </button>

      <div
        role="dialog"
        aria-modal="false"
        style={{
          position: "fixed",
          right: open ? 90 : -380,
          top: "24%",
          width: 320,
          maxWidth: "calc(100vw - 100px)",
          height: 380,
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 12px 28px rgba(0,0,0,.25)",
          padding: 16,
          transition: "right .25s ease",
          zIndex: 1000,
        }}
      >
        <h4 style={{ margin: "4px 0 12px" }}>Chat with Us</h4>
        <p style={{ marginTop: 0, color: "#888", fontSize: 13 }}>
          We typically reply in a few minutes.
        </p>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
          <input name="name" placeholder="Your name" style={inputStyle} />
          <input
            name="email"
            type="email"
            placeholder="Email (optional)"
            style={inputStyle}
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Type your message..."
            style={textareaStyle}
            required
          />
          <button type="submit" style={buttonStyle}>
            Send
          </button>
        </form>
        <div style={{ fontSize: 12, color: "#999", marginTop: 8 }}>
          Prefer phone? Call: 021-475089
        </div>
      </div>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #e0e0e0",
  borderRadius: 6,
};

const textareaStyle = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #e0e0e0",
  borderRadius: 6,
  resize: "vertical",
};

const buttonStyle = {
  background: "#1a73e8",
  color: "#fff",
  border: 0,
  padding: "10px 14px",
  borderRadius: 6,
  cursor: "pointer",
};
