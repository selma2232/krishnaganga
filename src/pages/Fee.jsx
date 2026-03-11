import Hero from "../components/Hero";
import { useState } from "react";
import "../styles/Fee.css";

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

          <div className="fee-card">
            <div className="fee-amount">
              Rs. 85,000 <span>/ month</span>
            </div>

            <p className="sub-note">
              + Rs. 15,000 (First month only – Admission & Initial Evaluation)
            </p>

            <ul className="internal-list">
              <li>Medical Examinations</li>
              <li>Detoxification (Withdrawal management)</li>
              <li>Welcome Kit for Client & Family</li>
            </ul>
          </div>

          <div className="fee-card">
            <div className="fee-amount">
              Rs. 10,000 <span>/ month</span>
            </div>

            <p className="sub-note">
              Accountable Personal Expenses
            </p>

            <ul className="internal-list">
              <li>Toiletries</li>
              <li>Laundry</li>
              <li>Salon</li>
              <li>Fruits & Juices</li>
              <li>Snacks</li>
            </ul>
          </div>

          <div className="info-box">
            In case personal expenses exceed Rs. 10,000, the family will be informed.
          </div>

          <p className="note">
            <strong>Note:</strong> Program activity fees are included.
          </p>

          <p className="tax">Taxes as applicable.</p>
        </section>
      </main>
    </>
  );
}