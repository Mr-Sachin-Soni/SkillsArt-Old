import React from "react";
// import { Link } from 'react-router-dom';
import "../Footer/Footer.css";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>SkillsArt</h3>
              <p>
                A108 Freshhia Heights <br />
                Mumbai, Maharashstra
                <br />
                India <br />
                <strong>Phone:</strong> +91 9817141500
                <br />
                <strong>Email:</strong> info@SkillsArt.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Quick Links</h4>
              <i className="bx bx-chevron-right"></i> <a href="/">Home</a>
              <br />
              <i className="bx bx-chevron-right"></i> <a href="/Arts">Arts</a>
              <br />
              <i className="bx bx-chevron-right"></i>
              <a href="/Artists">Artist</a>
              <br />
              <i className="bx bx-chevron-right"></i>
              <a href="/About">About</a>
              <br />
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Services</h4>
              <p>
                Monthly Offers
                <br />
                Welcome Gift
                <br />
                Artist Seminar
                <br />
                Bonus
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
