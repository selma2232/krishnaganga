import Hero from "../components/Hero";

export default function FeePage() {
  return (
    <main>
      <Hero />
      <section
        style={{
          color: "#222",
          padding: "48px 16px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: 26,
            fontWeight: 400,
            letterSpacing: 0.5,
          }}
        >
          Fee Structure
        </h1>
      </section>

      <section
        className="container"
        style={{ maxWidth: 1200, margin: "0 auto" }}
      >
        <p style={{ color: "#727272", fontWeight: "bold" }}>
          The treatment charges per month are as follows:
        </p>
        <ul style={{ lineHeight: 1.8, paddingLeft: 20, color: "#727272" }}>
          <li>
            Rs. 18,000 per month basic program fee. Registration fee Rs. 1,000
            (one-time). Medicine is not included.
          </li>
          <li>Doctor/Consultation charges when required.</li>
          <li>Laboratory/Investigations (when advised).</li>
          <li>Visitors are not permitted inside the ward area.</li>
          <li>
            Rs. 10,000 one-time pocket/expenses (fee is non-refundable) kept as
            an account/kitty for personal expenses such as toiletries, laundry,
            saloon, fruits, juices, biscuits, etc.
          </li>
        </ul>
        <p style={{ marginTop: 16, color: "#727272" }}>
          This includes fee for program activities also.
        </p>
        <p style={{ fontSize: 14, color: "#727272", marginTop: 8 }}>
          Taxes as applicable.
        </p>
      </section>
    </main>
  );
}
