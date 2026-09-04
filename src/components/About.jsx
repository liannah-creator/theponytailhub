import React from "react";
import "../styles/About.css";
import sistersImage from "../assets/sisters.jpg";

const About = () => {
  return (
    <section
  className="about-section"
  id="about"
  style={{ backgroundImage: `url(${sistersImage})` }}
>
      <div className="about-overlay"></div>

      <div className="about-glow"></div>

      <div className="about-content">

        <p className="about-label">ABOUT US</p>

        <h2 className="about-title">
          Three Sisters.
          <br />
          <span>One Vision.</span>
        </h2>

        <div className="about-glass">

          <p className="about-description">
            Born from the passion of three sisters, our brand was created
            to redefine luxury hair through beauty, confidence, and timeless
            elegance.
          </p>

          <p className="about-description">
            Every detail is thoughtfully chosen to make you feel confident,
            beautiful, and effortlessly unforgettable.
          </p>

          <div className="sisterhood">
            <span className="line"></span>

            <span className="sisterhood-text">
              BEAUTY • SISTERHOOD • LUXURY
            </span>

            <span className="line"></span>
          </div>

        </div>

        <button className="about-button">
          Discover Our Story
          <span>→</span>
        </button>

      </div>
    </section>
  );
};

export default About;