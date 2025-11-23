import Hero from "../components/Hero";
import "../components/BannedItems.css";
import { useMemo, useState } from "react";
import { BannedItems, bannedCardImgs } from "../components/data.js";

export default function BannedItemsPage() {
  const [slide, setSlide] = useState(0);
  const slides = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < bannedCardImgs.length; i += 3)
      chunks.push(bannedCardImgs.slice(i, i + 3));
    return chunks;
  }, []);
  const current = slides[slide] ?? [];
  return (
    <>
      <Hero />
      <main className="container">
        <section className="banned-section">
          <div className="banned-div">
            <h1 className="banned-title">Banned Items</h1>
          </div>

          <div className="banned-cards">
            <div className="cards-wrap">
              <div className="cards">
                {current.map((src, i) => {
                  const idx = slide * 3 + i;
                  const card = BannedItems[idx];
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
          </div>
        </section>
      </main>
    </>
  );
}
