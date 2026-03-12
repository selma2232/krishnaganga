import "../styles/TreatmentSection.css";

export default function TreatmentSection() {
  return (
    <section className="treatment-section">
      <div className="treatment-container">

        <h2 className="treatment-title">Our Treatment Program</h2>

        <div className="treatment-intro">
          <p>
            We take utmost care of sensitive issues to respect each client’s
            anonymity and personal dignity.
          </p>

          <p>
            After a preliminary history assessment, the client is admitted for
            an acute detoxification program. Once stabilized, participation in
            structured therapy sessions begins under professional supervision.
          </p>

          <p>
            Each treatment plan is individualized and supervised by a clinical
            psychologist and psychiatrist. The complete program lasts
            approximately <strong>4 months</strong>.
          </p>
        </div>

        <h3 className="program-heading">Our Programs Include</h3>

       <div className="program-grid">
  <ul className="treatment-list">
    <li>Standard Medical Tests & Physician Analysis</li>
    <li>Psychiatrist Assessments</li>
    <li>Psychological Evaluation</li>
    <li>Medically Supervised Detoxification</li>
    <li>Medical, Psychological & Dietary Support</li>
    <li>AA/NA 12 Step Program</li>
    <li>REBT (Psychotherapy)</li>
    <li>Emotional & Group Counseling</li>
    <li>Family Counseling</li>
    <li>Behavior Therapy</li>
    <li>Relapse Prevention Program</li>
    <li>Adult Substance Education</li>
    <li>Life Skills & Career Counseling</li>
  </ul>
</div>
      </div>
    </section>
  );
}