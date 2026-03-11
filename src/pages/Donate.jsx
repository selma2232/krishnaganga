import { useState } from "react";
 const esewa = "../assets/Esewa_logo.webp.png";
 const khalti = "../assets/lataus (2).png";
 const paypal = "../public/assets/lataus (1).png";
 const bank = "../assets/lataus.png";
 const stripe = "../assets/lataus (3).png";
import "../styles/donate.css";
export default function DonatePage() {

  const [donationType, setDonationType] = useState("one-time");
  const [amount, setAmount] = useState(6000);
  const [paymentMethod, setPaymentMethod] = useState("");

  const amounts = [200000, 120000, 50000, 25000, 12000, 6000];

  return (
    <main>

      {/* HERO */}
      <section className="donate-hero">
        <div className="donate-hero-content">
          <p className="breadcrumb-text"></p>
          <h1>Support Our Mission</h1>
        </div>
      </section>

      {/* DONATION CARD */}
      <section className="donate-wrapper">

        <div className="donate-card">

          {/* TOGGLE */}
          <div className="donate-toggle">

            <button
              className={donationType === "one-time" ? "active" : ""}
              onClick={() => setDonationType("one-time")}
            >
              One-time
            </button>

            <button
              className={donationType === "monthly" ? "active" : ""}
              onClick={() => setDonationType("monthly")}
            >
              Monthly
            </button>

          </div>

          {/* TEXT */}
          <p className="donate-text">
            {donationType === "one-time"
              ? "Your generous one-time donation"
              : "Your monthly support helps us continue our mission"}
          </p>

          {/* AMOUNT BUTTONS */}
          <div className="amount-grid">

            {amounts.map((value) => (
              <button
                key={value}
                className={amount === value ? "selected" : ""}
                onClick={() => setAmount(value)}
              >
                Rs {value.toLocaleString()}
              </button>
            ))}

          </div>

          {/* CUSTOM AMOUNT */}
          <div className="amount-input">

            <span>Rs</span>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <select>
              <option>NPR</option>
              <option>USD</option>
            </select>

          </div>

          {/* CHECKBOX */}
          <div className="donate-check">
            <input type="checkbox" />
            <label>Dedicate this donation</label>
          </div>

          {/* PAYMENT METHODS */}
          <h3 className="payment-title">Choose Payment Method</h3>

          <div className="payment-grid">

           <label>
  <input
    type="radio"
    name="payment"
    value="esewa"
    onChange={(e) => setPaymentMethod(e.target.value)}
  />
  <img src={esewa} alt="eSewa" />
</label>

<label>
  <input
    type="radio"
    name="payment"
    value="khalti"
    onChange={(e) => setPaymentMethod(e.target.value)}
  />
  <img src={khalti} alt="Khalti" />
</label>

<label>
  <input
    type="radio"
    name="payment"
    value="paypal"
    onChange={(e) => setPaymentMethod(e.target.value)}
  />
  <img src={paypal} alt="PayPal" />
</label>

<label>
  <input
    type="radio"
    name="payment"
    value="bank"
    onChange={(e) => setPaymentMethod(e.target.value)}
  />
  <img src={bank} alt="Bank" />
</label>

<label>
  <input
    type="radio"
    name="payment"
    value="stripe"
    onChange={(e) => setPaymentMethod(e.target.value)}
  />
  <img src={stripe} alt="Stripe" />
</label>
          </div>

          {/* DONATE BUTTON */}
          <button className="donate-btn">
            Donate Now
          </button>

        </div>

      </section>

      {/* TOP DONOR LIST */}
      <section className="donor-section">

        <div className="donor-container">

          <div className="donor-header">

            <h2>Top Donor List</h2>

            <div className="donor-controls">
              <select>
                <option>2026</option>
              </select>

              <select>
                <option>All</option>
              </select>

              <input placeholder="Search by donors name" />
            </div>

          </div>

          <table className="donor-table">

            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Donation Date</th>
                <th>Donation Amount</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>3</td>
               <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

            </tbody>

            <tfoot>
              <tr>
                <td colSpan="5"></td>
                <td></td>
              </tr>
            </tfoot>

          </table>

        </div>

      </section>

    </main>
  );
}