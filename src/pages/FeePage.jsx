import Hero from "../components/Hero";
import "../components/FeePage.css";

export default function FeePage() {
  return (
    <>
      <Hero />
      <main className="fee-page">
        <section className="fee-header">
          <h1>Fee Structure</h1>
        </section>

        <section className="fee-content">
          <p className="intro">
            The treatment charges per month are as follows:
          </p>

          <ul>
            <li>
              Rs. 18,000 per month basic program fee. Registration fee Rs. 1,000
              (one-time). Medicine is not included.
            </li>
            <li>Doctor/Consultation charges when required.</li>
            <li>Laboratory/Investigations (when advised).</li>
            <li>Visitors are not permitted inside the ward area.</li>
            <li>
              Rs. 10,000 one-time pocket/expenses (fee is non-refundable) kept
              as an account/kitty for personal expenses such as toiletries,
              laundry, saloon, fruits, juices, biscuits, etc.
            </li>
          </ul>

          <p className="note">This includes fee for program activities also.</p>
          <p className="tax">Taxes as applicable.</p>
        </section>
      </main>
    </>
  );
}
