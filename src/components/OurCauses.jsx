import "../styles/OurCauses.css";

function OurCauses() {
  return (
    <section className="container section our-causes-section">
      <div className="row">
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <h2>Our Treatment Procedures & Methods</h2>
              <div className="items zoom">
                <a href="#" className="img-thumb">
                  <figure>
                    <img
                      src="https://plus.unsplash.com/premium_photo-1675808577247-2281dc17147a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJlYXRtZW50fGVufDB8fDB8fHww"
                      alt="mental recovery"
                    />
                  </figure>
                </a>
                <h3 className="h4">
                  Tailord with reference to personal history, family history,
                  circumtances
                </h3>
                <p>
                  Our program deals with physical recovery, mental recovery,
                  self evalution, self esteem, self confidence to support the
                  client to abstain from addiction and to lead a happy life. Key
                  essence in family program which we adhere to very strictly.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6 cause-summary">
              <h2>Programme</h2>
              <div className="programme-grid">
                <div className="one-block">
                  <div className="items zoom">
                    <a href="#" className="img-thumb">
                      <figure>
                        <img
                          src="https://plus.unsplash.com/premium_photo-1675807264533-5e6db71ba3c4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRyZWF0bWVudHxlbnwwfHwwfHx8MA%3D%3D"
                          alt="Behaviour Therapy"
                        />
                      </figure>
                    </a>
                    <div className="heading-block">
                      <h3 className="h4">Behaviour Therapy</h3>
                    </div>
                    <p>
                      Behaviour Therapy,here helps the person to look more
                      specific ,and teaches how the behaviour influences the
                      environment.
                    </p>
                  </div>
                </div>
                <div className="one-block">
                  <div className="items zoom">
                    <a href="#" className="img-thumb">
                      <figure>
                        <img
                          src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop"
                          alt="Relapse Prevention Program"
                        />
                      </figure>
                    </a>
                    <div className="heading-block">
                      <h3 className="h4">Relapse Prevention Program</h3>
                    </div>
                    <p>
                      Relapse prevention programs can help reduce the risk of a
                      return to self-destructive behavior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCauses;
