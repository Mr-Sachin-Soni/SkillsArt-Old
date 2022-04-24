import React from "react";
import "../About/About.css";
import Profile2 from "../About/Profile2.jpg";
// import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";


export const About = () => {
  return (
    <div>
      <div>
        <div className="col-md-12 text-center">
          <h2 className="about-heading">About Me</h2>
          <div className="underline mx-auto"></div>
        </div>
      </div>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <img src={Profile2} alt="My Profile" />
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Dennis Ritchie</h5>
                <h6>Email:DeRitchie@gmail.com</h6>
                <h6>Contact:9012345698</h6>
                <h6>New User</h6>
                   {/* <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: " 1" }}
                    >
                      Edit profile
                    </button>  */}
                    <Link to="/Edit"  className="btn btn-outline-dark"
                     data-mdb-ripple-color="dark"
                     style={{ zIndex: " 1" }}>
                    Edit Profile
                  </Link>
                {/* <h6>10 years of experience</h6>
                <h6>Best Artist Award</h6>
                <p className="profile-rating mt-3 mb-5">
                  Rankings : <span>9/10</span>
                </p> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
