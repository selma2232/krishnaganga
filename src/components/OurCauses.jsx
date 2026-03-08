import "../styles/OurCauses.css";

function OurCauses() {
  return (
    <section className="our-causes-section">
      <div className="causes-container">

        {/* LEFT SIDE */}
        <div className="main-cause">
          <h2>Our Treatment Procedures & Methods</h2>

          <div className="items featured">
            <div className="img-thumb">
              <img
                src="https://media.istockphoto.com/id/1459782858/fi/valokuva/nuoret-aikuiset-yliopisto-opiskelijat-keskustelevat-ik%C3%A4toverinsa-kanssa.jpg?s=2048x2048&w=is&k=20&c=vvCaC3wVWGHjRKoct8tIuItKJtPwNCpyYasBPY7n0Lg="
                alt="mental recovery"
              />
            </div>

            <div className="heading-block">
              <h3 className="h4">
                Tailored with reference to personal history, family history,
                circumstances
              </h3>

              <p>
                Our program deals with physical recovery, mental recovery,
                self-evaluation, self-esteem, and self-confidence to support
                clients in abstaining from addiction and leading a fulfilling life.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="programme-section">
          <h2>Programme</h2>

          <div className="programme-grid">

            <div className="items">
              <div className="img-thumb">
                <img
                  src="https://plus.unsplash.com/premium_photo-1675807264533-5e6db71ba3c4?w=700&auto=format&fit=crop&q=60"
                  alt="Behaviour Therapy"
                />
              </div>

              <div className="heading-block">
                <h3 className="h4">Behaviour Therapy</h3>
                <p>
                  Behaviour Therapy helps individuals understand how behaviour
                  influences their environment and teaches healthier patterns.
                </p>
              </div>
            </div>

            <div className="items">
              <div className="img-thumb">
                <img
                  src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop"
                  alt="Relapse Prevention Program"
                />
              </div>

              <div className="heading-block">
                <h3 className="h4">Relapse Prevention Program</h3>
                <p>
                  Structured support designed to reduce the risk of returning
                  to self-destructive behaviours.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default OurCauses;