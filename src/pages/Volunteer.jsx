import "../styles/DonatePage.css";
import { useState } from "react";

export default function VolunteerPage() {
  const [status, setStatus] = useState({ loading: false, msg: "" });

  async function handleSubmit(e) {
    const form = e.target;

    // Browser validation popup
    if (!form.reportValidity()) {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    const formData = new FormData(form);

    setStatus({ loading: true, msg: "" });

    try {
      const res = await fetch("https://formspree.io/f/xvzwryjo", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        setStatus({
          loading: false,
          msg: "Thank you! Your volunteer application has been submitted."
        });

        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      setStatus({
        loading: false,
        msg: "Something went wrong. Please try again."
      });
    }
  }

  return (
    <main>

      {/* HERO */}
      <section className="donate-heroo">
        <div className="donate-hero-content">
          <h1>
            We need you, <strong>Help Us Around</strong>
          </h1>
        </div>
      </section>

      {/* FORM */}
      <section className="form-section">
        <div className="volunteer-form-wrapper">

          <h2 className="form-title">Volunteer Application Form</h2>

          <p className="form-subtitle">
            Let us know your area of interest so we can match you with suitable volunteering tasks.
          </p>

          <form className="volunteer-form" onSubmit={handleSubmit}>

            {/* PERSONAL INFO */}
            <div className="form-grid-2">
              <div>
                <label>Full Name *</label>
                <input name="name" type="text" required />
              </div>

              <div>
                <label>Gender *</label>
                <select name="gender" required>
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="form-grid-2">
              <div>
                <label>Phone Number *</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  pattern="[0-9+ ]+"
                  placeholder="+977..."
                />
              </div>

              <div>
                <label>Email Address *</label>
                <input name="email" type="email" required />
              </div>
            </div>

            {/* ADDRESS */}
            <div>
              <label>Residential Address</label>
              <textarea name="address" rows="3"></textarea>
            </div>

            {/* VOLUNTEER DETAILS */}
            <h3 className="section-heading">Volunteer Details</h3>

            <div>
              <label>Preferred Duration</label>
              <input
                name="duration"
                type="text"
                placeholder="e.g. 4 weeks, 2 months"
              />
            </div>

            <div className="checkbox-group">
              <label>Availability</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="availability"
                    value="Full-time"
                  />
                  Full-time
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="availability"
                    value="Part-time"
                  />
                  Part-time
                </label>
              </div>
            </div>

            {/* MOTIVATION */}
            <h3 className="section-heading">Motivation and Experience</h3>

            <div>
              <label>Why do you want to volunteer with us?</label>
              <textarea name="motivation" rows="4"></textarea>
            </div>

            <div>
              <label>Do you have any relevant skills?</label>
              <textarea name="skills" rows="3"></textarea>
            </div>

            {/* SUBMIT */}
            <button type="submit" className="submit-btn">
              {status.loading ? "Submitting..." : "Submit Application"}
            </button>

            {status.msg && <p className="form-status">{status.msg}</p>}

          </form>
        </div>
      </section>

    </main>
  );
}