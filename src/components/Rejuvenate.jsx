import "./Rejuvenate.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import OurCauses from "./OurCauses";

export default function Rejuvenate({
  videoUrl = "https://youtu.be/qrQVdhSE-Vc",
}) {
  const embed = videoUrl
    .replace("youtu.be/", "www.youtube.com/embed/")
    .replace("watch?v=", "embed/");

  return (
    <div className="rejuvenate">
      <section className="section alt">
        <div className="title-container">
          <header className="section-title">
            <h2>
              Rejuvenating <strong>Activities</strong>
            </h2>
          </header>
        </div>
        <div className="content-container">
          <div className="row help-list">
            <div className="col-xs-12 col-sm-6 col-lg-5">
              <article className="media">
                <a className="pull-left warning-icon-box" href="#">
                  <i className="fas fa-volume-up"></i>
                </a>
                <div className="media-body less-width">
                  <h3 className="media-heading">Yoga & Meditation</h3>
                  <p>
                    Yoga Meditation is the art and science of systematically
                    observing, accepting, understanding, and training each of
                    the levels of our being
                  </p>
                </div>
              </article>
              <article className="media">
                <a className="pull-left warning-icon-box" href="#">
                  <i className="fas fa-user"></i>
                </a>
                <div className="media-body less-width">
                  <h3 className="media-heading">
                    Recreational Art / Craft / Music Therapy
                  </h3>
                  <p>
                    We understand that illness and medical procedures have the
                    potential to cause anxiety and fear in person. To ease these
                    feelings and help your family.
                  </p>
                </div>
              </article>
              <article className="media">
                <a className="pull-left warning-icon-box" href="#">
                  <i className="fas fa-heart"></i>
                </a>
                <div className="media-body less-width">
                  <h3 className="media-heading">Well Equipped Library</h3>
                  <p>
                    We have well equipped library which consists of various
                    books on different sectors and subjects.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-6 col-lg-offset-1">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  width="555"
                  height="316"
                  src={embed}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurCauses />
    </div>
  );
}
