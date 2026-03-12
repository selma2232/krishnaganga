import React from "react";
import "../styles/TreatmentServices.css";
import { allCards, cardImgs } from "../components/data.js";

function TreatmentServices() {
  return (
    <section className="treatment-services">
      <div className="container">
        <div className="services-grid">
          {allCards.map((card, index) => (
            <div className="service-card" key={index}>
              <h4 className="card-title">{card.title}</h4>

              <div className="thumb">
                <img src={cardImgs[index]} alt={card.title} />
                <span className="badge">View</span>
              </div>

              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TreatmentServices;