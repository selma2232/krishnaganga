import React, { useMemo, useState } from "react";
import "./MidSection.css";

import { allCards, cardImgs } from "./data.js";

function MidSection() {
  const [slide, setSlide] = useState(0);
  const slides = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < cardImgs.length; i += 3)
      chunks.push(cardImgs.slice(i, i + 3));
    return chunks;
  }, []);
  const current = slides[slide] ?? [];

  return (
    <div className="mid-section">
      <section className="container section">
        <h3 className="section-title">
          Dedicated Team Of Counsellor, Psychologist, Psychiatrist & Other Team Of Doctors
        </h3>
        <div className="cards-wrap">
          <div className="cards">
            {current.map((src, i) => {
              const idx = slide * 3 + i;
              const card = allCards[idx];
              return (
                <figure className="card" key={idx}>
                  <h5 className="card-title">
                    {card?.title || `Feature ${idx + 1}`}
                  </h5>
                  <div className="thumb">
                    <img src={src} alt={`highlight ${idx + 1}`} />
                    <span className="badge">View</span>
                  </div>
                  <figcaption>
                    <p>
                      {card?.description ||
                        "Short description for this highlight item goes here."}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
          {slides.length > 1 && (
            <div className="dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={"dot" + (i === slide ? " active" : "")}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setSlide(i)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default MidSection;
