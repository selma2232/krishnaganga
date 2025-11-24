import "./Hero.css";
import { useState, useEffect, useRef } from "react";
import slideImg1 from "../assets/slideImage1.png";
import slideImg2 from "../assets/slideImage2.png";
import slideImg3 from "../assets/slideImage3.png";

const slides = [slideImg1, slideImg2, slideImg3];

export default function Hero() {
  const [i, setI] = useState(0);
  const intervalRef = useRef(null);

  const next = () => setI((p) => (p + 1) % slides.length);
  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 8000);
    return () => clearInterval(intervalRef.current);
  }, []);

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
