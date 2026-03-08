import { useEffect } from "react";
import { FaVolumeUp, FaUser, FaHeart } from "react-icons/fa";
import "../styles/Rejuvenate.css";
import OurCauses from "./OurCauses";

export default function Rejuvenate({
  videoUrl = "https://youtu.be/qrQVdhSE-Vc",
}) {
  const embed = videoUrl
    .replace("youtu.be/", "www.youtube.com/embed/")
    .replace("watch?v=", "embed/");

  useEffect(() => {
    const elements = document.querySelectorAll(".media");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="rejuvenate">
      <section className="rejuvenate-section alt">
        <div className="title-container">
          <header className="section-title">
            <h2>
              Rejuvenating <strong>Activities</strong>
            </h2>
          </header>
        </div>

        <div className="content-container">

          {/* LEFT SIDE - TEXT */}
          <div className="text-col">

            <article className="media">
              <div className="warning-icon-box">
                <FaVolumeUp size={22} />
              </div>
              <div className="media-body">
                <h3 className="media-heading">Yoga & Meditation</h3>
                <p>
                  Yoga Meditation is the art and science of systematically
                  observing, accepting, understanding, and training each of
                  the levels of our being.
                </p>
              </div>
            </article>

            <article className="media">
              <div className="warning-icon-box">
                <FaUser size={22} />
              </div>
              <div className="media-body">
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
              <div className="warning-icon-box">
                <FaHeart size={22} />
              </div>
              <div className="media-body">
                <h3 className="media-heading">Well Equipped Library</h3>
                <p>
                  We have well equipped library which consists of various
                  books on different sectors and subjects.
                </p>
              </div>
            </article>

          </div>

          {/* RIGHT SIDE - VIDEO */}
          <div className="video-col">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                src={embed}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Rejuvenating Activities Video"
              />
            </div>
          </div>

        </div>
      </section>

      <OurCauses />
    </div>
  );
}