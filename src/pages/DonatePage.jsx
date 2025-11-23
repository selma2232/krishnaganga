import "../components/DonatePage.css";

export default function DonatePage() {
  return (
    <main>
      <section className="breadcrumb-section">
        <p className="breadcrumb-text">Home / Donate us</p>
        <h1 className="donate-title">
          We need you, <strong>Help Us Around</strong>
        </h1>
        <div className="donate-image-wrapper">
          <img
            alt="Helping hands"
            src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1600&auto=format&fit=crop"
            className="donate-image"
          />
        </div>
      </section>

      <section className="form-section container">
        <div className="form-wrapper">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc7JvpJVKCG-jb2m7JLt967YKX4B_blxBg86ff0j0zaNjQ1VQ/viewform?embedded=true"
            className="donate-form"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Donate Form"
          >
            Loading...
          </iframe>
        </div>
      </section>
    </main>
  );
}
