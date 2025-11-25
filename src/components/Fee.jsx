import "./Fee.css";

function Fee() {
  return (
    <main className="fee-page">
      <section className="fee-header">
        <h1>Fee Structure</h1>
      </section>

      <section className="fee-content">
        <p className="intro">The treatment charges per month are as follows:</p>
        <ol className="external-list">
          <li className="external-li">
            Rs. 85,000 per month (Rupees Eighty- five thousand only) Rs 15,000/-
            for 1st month only (Rupees Ten Thousand Only) which includes:
          </li>

          <ul className="internal-list">
            <li>Medical Examinations</li>
            <li>Detoxification charges (Withdrawal management)</li>
            <li>Welcome Kit (Literature to Client and family)</li>
          </ul>

          <li className="external-li">
            Rs 10,000 per month (Rupees Five Thousand only-Accountable) for his
            personal expenses which includes :
          </li>

          <ul className="internal-list">
            <li>His toiletries</li>
            <li>Laundry</li>
            <li>Saloon</li>
            <li>Fruits</li>
            <li>Juices</li>
            <li>Biscuits</li>
            <li>Chocolate</li>
          </ul>

          <li className="external-li">
            In case the amount exceeds Rs. 10000/- it will be informed to the
            family.
          </li>
        </ol>

        <p className="note">
          <strong>Note: </strong>This includes fee for program activities also.
        </p>
        <p className="tax">Taxes as applicable.</p>
      </section>
    </main>
  );
}

export default Fee;
