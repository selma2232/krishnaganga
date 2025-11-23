import "./Hero.css";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const slides = [
    "https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGRlbW98ZW58MHwwfDB8fHww",
    "https://images.unsplash.com/photo-1569060368681-889a62a8f416?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVtb3xlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&auto=format&fit=crop&q=60",
  ];
  const [i, setI] = useState(0);
  const intervalRef = useRef(null);

  const next = () => setI((p) => (p + 1) % slides.length);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);

  // Auto‑advance every 4 seconds
  useEffect(() => {
    intervalRef.current = setInterval(next, 8000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Pause on hover, resume on leave
  const pause = () => clearInterval(intervalRef.current);
  const resume = () => (intervalRef.current = setInterval(next, 12000));

  return (
    <section className="hero" onMouseEnter={pause} onMouseLeave={resume}>
      <div className="hero-grid">
        <div className="art">
          <div className="image">
            <img src={slides[i]} alt="hero slide" />
          </div>

          <div className="hero-dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={"dot" + (idx === i ? " active" : "")}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setI(idx)}
              />
            ))}
          </div>
          <button
            className="hero-nav left"
            aria-label="Previous"
            onClick={prev}
          >
            ‹
          </button>
          <button className="hero-nav right" aria-label="Next" onClick={next}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
