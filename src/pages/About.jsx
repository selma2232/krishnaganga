import Hero from "../components/Hero";
import "../styles/About.css";
export default function AboutPage() {
  return (
    <>
      <Hero />

      <main>
        <section className="about-component">
          <div className="container">
            <h2 className="about-title">Who We Are</h2>

            <p>
              Situated in the heart of city Biratnagar, HOPE TRUST, Krishna
              Ganga Drug and Alcohol Deaddiction and Rehabilitation Centre
              registered in Chief District Office, Morang and Ministry of Home
              Affairs and Social Welfare Nepal has facilities for 10 bedded
              Residential 12 steps program facilities with dedicated team of
              counsellor, psychologist, psychiatrist and other team of doctors.
              It is providing services to the people in around Eastern Region of
              Nepal and Neighboring India.
            </p>

            <p>
              The long term goal of this Rehab is to provide Curative,
              preventive and promotive physical and mental health services to
              the people with efficiency, effectiveness and assurance with the
              context of equity and social justice. Though a small Rehab to
              focus properly on residents, it has all the ingredients to achieve
              the goal.
            </p>

            <p>
              In Krishna Ganga we also emphasize on candidate physical and
              mental health. We do have TV hall, carpet, yoga mats and
              Treadmills.
            </p>

            <p>
              This Rehab is backed up by Neuro Cardio And Multi-Disciplinary
              Hospital, which has basic facilities for outdoor, indoor clinical
              services in different departments with latest CTA (CT Scan machine
              with Angiography), MRI, CATHLAB, CCU, ICU and Dialysis Machine.
            </p>

          </div>
        </section>
      </main>
    </>
  );
}