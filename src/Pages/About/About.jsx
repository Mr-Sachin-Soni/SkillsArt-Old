import React from "react";
import "../About/About.css";
import Profile2 from "../About/Profile2.jpg";

export const About = () => {
  return (
    <div>
      <div>
        <div className="col-md-12 text-center">
          <h2 className="about-heading">About Us</h2>
          <div className="underline mx-auto"></div>
        </div>
      </div>
      {/* <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img src={Profile2} alt="My Profile" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Dennis Ritchie</h5>
                <h6>Professional Painter</h6>
                <p className="profile-rating mt-3 mb-5">
                  Rankings : <span>1/10</span>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div> */}
    </div>
  );
};
