import React, { useState } from "react";
import "./Contact.css";

export default function Contact({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  // console.log(errors);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus({ loading: true, ok: null, msg: "" });

    try {
      if (onSubmit && typeof onSubmit === "function") {
        await onSubmit(form);
      } else {
        await new Promise((r) => setTimeout(r, 700));
      }
      setStatus({
        loading: false,
        ok: true,
        msg: "Thank you — your message has been sent.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});

      setTimeout(() => {
        setStatus({ msg: "" });
      }, 3000);
    } catch (err) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Failed to send message. Try again later.",
      });
      console.error(err);
    }
  }

  function closePopup() {
    setStatus({ msg: "" });
  }

  function onChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  return (
    <section className="contact-section container">
      <div>
        <h3>Send us Message</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="grid-two">
            <div>
              <label>
                Name<span style={{ color: "#c8102e" }}> *</span>
              </label>
              <input name="name" value={form.name} onChange={onChange} />
            </div>
            <div>
              <label>
                Email<span style={{ color: "#c8102e" }}> *</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
              />
            </div>
          </div>
          <div>
            <label>
              Subject<span style={{ color: "#c8102e" }}> *</span>
            </label>
            <input name="subject" value={form.subject} onChange={onChange} />
          </div>
          <div>
            <label>
              Message<span style={{ color: "#c8102e" }}> *</span>
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={onChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        {status.msg && (
          <div className="status-message">
            <span>{status.msg}</span>
            <button onClick={closePopup} className="btn-cross">
              <i className="fas fa-times"></i>
            </button>
          </div>
        )}
      </div>

      <aside className="contact-aside">
        <h3>Get in touch</h3>
        <div>
          <span>
            <strong>Address:</strong> Janapath Tole,Biratnagar
            <br />
            Nepal
          </span>
          <span>
            <strong>E-Mail:</strong>{" "}
            <a href="mailto:krishnaganga@gmail.com"> krishnaganga@gmail.com</a>
          </span>
          <span>
            <strong>Tel:</strong> 021-475089
          </span>
          <span>
            <strong>Fax:</strong> 021-476089
          </span>
        </div>
      </aside>
    </section>
  );
}
