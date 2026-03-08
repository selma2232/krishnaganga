import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

 


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
    <div className="contact-wrapper">
      <div className="contact-map">
        <div className="contact-map-header">
         <h2>Find Us Here</h2>
  <p>
   Our office is located in Biratnagar, Nepal.
  </p>
</div>

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57155.73338895946!2d87.23060759124789!3d26.44820654311647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef744704331cc5%3A0x6d9a85e45c54b3fc!2sBiratnagar%2056613!5e0!3m2!1sen!2snp!4v1772343004373!5m2!1sen!2snp"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Biratnagar Map"
  ></iframe>
</div>
            
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
            <i className="fa-solid fa-location-dot"></i>
            <strong>Address:</strong> Janapath Tole, Biratnagar
            <br />
            Nepal
          </span>
          <span>
              <i className="fa-solid fa-envelope"></i>
            <strong>E-Mail:</strong>{" "}
            <a href="mailto:krishnaganga@gmail.com"> krishnaganga@gmail.com</a>
          </span>
          <span>
               <i className="fa-solid fa-phone"></i>
            <strong>Tel:</strong> 021-475089
          </span>
          <span>
        
          </span>
        </div>
      </aside>
    </section>
    </div>
  );
}
