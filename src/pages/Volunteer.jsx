import "../styles/DonatePage.css";

export default function VolunteerPage() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="donate-heroo">
        <div className="donate-hero-content">
          <p className="breadcrumb-text"></p>
          <h1>
            We need you, <strong>Help Us Around</strong>
          </h1>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="form-section">
        <div className="volunteer-form-wrapper">

          <h2 className="form-title">Volunteer Application Form</h2>
          <p className="form-subtitle">
            Let us know your area of interest so we can match you with suitable volunteering tasks.
          </p>

          <form className="volunteer-form">

            {/* PERSONAL INFO */}
            <div className="form-grid-2">
              <div>
                <label>Full Name *</label>
                <input type="text" />
              </div>

              <div>
                <label>Gender *</label>
                <select>
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>

            <div className="form-grid-2">
              <div>
                <label>Phone Number *</label>
                <input type="text" />
              </div>

              <div>
                <label>Email Address *</label>
                <input type="email" />
              </div>
            </div>

            <div>
              <label>Residential Address</label>
              <textarea rows="3"></textarea>
            </div>

            {/* VOLUNTEER DETAILS */}
            <h3 className="section-heading">Volunteer Details</h3>

            <div>
              <label>Preferred Duration</label>
              <input type="text" placeholder="e.g. 4 weeks, 2 months" />
            </div>

            <div className="checkbox-group">
              <label>Availability</label>
              <div>
                <label><input type="checkbox" /> Full-time</label>
                <label><input type="checkbox" /> Part-time</label>
              </div>
            </div>

            {/* MOTIVATION */}
            <h3 className="section-heading">Motivation and Experience</h3>

            <div>
              <label>Why do you want to volunteer with us?</label>
              <textarea rows="4"></textarea>
            </div>

            <div>
              <label>Do you have any relevant skills?</label>
              <textarea rows="3"></textarea>
            </div>

            {/* SUBMIT BUTTON */}
            <button type="submit" className="submit-btn">
              Submit Application
            </button>

          </form>
        </div>
      </section>

    </main>
  );
}