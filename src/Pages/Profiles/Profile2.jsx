import React from "react";
// import "../Profiles/Profiles.css";
import Artist1 from "../Profiles/Artist1.jpeg";
export const Profile2 = () => {
  return (
    <div>
      <div className="col-md-12 text-center">
        <h2 className="artist-heading"> Artist Profile</h2>
        <div className="underline mx-auto"></div>
      </div>
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card">
                <div
                  className="rounded-top text-black d-flex flex-row"
                  style={{ height: "200px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <img
                      src={Artist1}
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-6 mb-5"
                      style={{ width: "250px", height: "250px" }}
                    />
                    {/* <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: " 1" }}
                    >
                      Edit profile
                    </button> */}
                  </div>
                  <div className="ms-5" style={{ marginTop: "130px" }}>
                    <h5>Andy Horwitz</h5>
                    {/* <p>New York</p> */}
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-center text-center py-1">
                    <div>
                      <p className="mb-1 h5">400+</p>
                      <p className="small text-muted mb-0">Projects</p>
                    </div>
                    {/* <div className="px-3">
                      <p className="mb-1 h5">1026</p>
                      <p className="small text-muted mb-0">Followers</p>
                    </div>
                    <div>
                      <p className="mb-1 h5">478</p>
                      <p className="small text-muted mb-0">Following</p>
                    </div> */}
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">
                      <b>About</b>
                    </p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <p className="font-italic mb-1">Sketch Artist</p>
                      <p className="font-italic mb-1">Lives in New York</p>
                      <p className="font-italic mb-0">6 years of experience</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">
                      <b>Recent Projects</b>
                    </p>
                    <p className="mb-0">
                      <a href="#!" className="text-muted">
                        Show all
                      </a>
                    </p>
                  </div>
                  <div className="row g-2">
                    <div className="col mb-2">
                      <img
                        src={Artist1}
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col mb-2">
                      <img
                        src={Artist1}
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col">
                      <img
                        src={Artist1}
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col">
                      <img
                        src={Artist1}
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
