import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-glow"></div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-intro">

          <p className="contact-label">GET IN TOUCH</p>

          <h2>
            Let's Create
            <br />
            <span>Something Beautiful.</span>
          </h2>

          <p className="contact-text">
            Whether you're looking for your perfect ponytail, have a question
            about an order, or simply want to say hello, we'd love to hear
            from you.
          </p>

          <div className="contact-details">

            <div className="contact-detail">
              <span className="detail-title">EMAIL</span>
              <span className="detail-value">
                hello@theponytailhub.com
              </span>
            </div>

            <div className="contact-detail">
              <span className="detail-title">PHONE</span>
              <span className="detail-value">
                09060256522
              </span>
            </div>

            <div className="contact-detail">
              <span className="detail-title">FOLLOW US</span>
              <span className="detail-value">
                @theponytailhub
              </span>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE — FORM */}
        <div className="contact-glass">

          <form>

            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label>Your Message</label>
              <textarea
                rows="5"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>

            <button type="submit" className="contact-button">
              SEND MESSAGE
              <span>→</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;