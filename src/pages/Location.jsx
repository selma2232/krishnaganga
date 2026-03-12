import React from "react";
const PageContainer =  "../page/PageContainer";
import "../styles/Location.css";

const Location = () => {
  return (
    <PageContainer>
      <section className="location-section">
        <div className="location-header">
          <h1 className="location-title">Our Location</h1>
          <p className="location-description">
           
          </p>
        </div>

        <div className="map-wrapper">
          <iframe
            title="Krishna Ganga Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.0631189244746!2d87.27099071449213!3d26.45369428606887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef744541d01bd3%3A0x57b7ceeeaf08f255!2sJanpath+Tole%2C+Biratnagar+56613%2C+Nepal!5e0!3m2!1sen!2snp!4v1469605031516"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </PageContainer>
  );
};

export default Location;