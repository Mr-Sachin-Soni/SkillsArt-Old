import React from "react";
import "../Arts/Arts.css";
// import Artist1 from "../Arts/Artist1.jpeg";

// import {Artist1} from "C:/Users/sachin/Desktop/ty_project/src/components/images/Artist1.jpeg";

export const Arts2 = () => {
  return (
    <div>
      <div className="col-md-12 text-center">
        <h2 className="arts-heading">Our Arts</h2>
        <div className="underline mx-auto"></div>
      </div>

      {/* <section id="portfolio" className="portfolio">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div
            className="row aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app" className="">
                  Paintings
                </li>
                <li data-filter=".filter-card" className="">
                  Sketches
                </li>
                <li data-filter=".filter-web" className="">
                  Sculptures
                </li>
                <li data-filter=".filter-app" className="">
                  Handicrafts
                </li>


                
              </ul>
            </div>
          </div>

          <div
            className="row portfolio-container aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ position: "relative", height: "720px" }}
          >
            <div
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              style={{
                position: "absolute",
                left: "0px",
                top: "0px",
                display: "none",
              }}
            >
              <div className="portfolio-wrap">
                <img src={Artist1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a
                      href="src/Pages/Arts/portfolio-1.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 1"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-web"
              style={{
                position: "absolute",
                left: "380px",
                top: "0px",
                display: "none",
              }}
            >
              <div className="portfolio-wrap">
                <img src={Artist1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a
                      href="src/Pages/Arts/portfolio-2.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              style={{
                position: "absolute",
                left: "380px",
                top: "0px",
                display: "none",
              }}
            >
              <div className="portfolio-wrap">
                <img src={Artist1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a
                      href="src/Pages/Arts/portfolio-3.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 2"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-card"
              style={{ position: "absolute", left: "0px", top: "0px" }}
            >
              <div className="portfolio-wrap">
                <img src={Artist1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 2</h4>
                  <p>Card</p>
                  <div className="portfolio-links">
                    <a
                      href="src/Pages/Arts/portfolio-4.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 2"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-web"
              style={{
                position: "absolute",
                left: "380px",
                top: "297px",
                display: "none",
              }}
            >
              <div className="portfolio-wrap">
                <img src={Artist1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a
                      href="src/Pages/Arts/portfolio-5.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 2"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-app"
              style={{
                position: "absolute",
                left: "760px",
                top: "0px",
                display: "none",
              }}
            >
              <div className="portfolio-wrap">
                <img src={Artist1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a
                      href="src/Pages/Arts/portfolio-6.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 3"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-card"
              style={{ position: "absolute", left: "0px", top: "240px" }}
            >
              <div className="portfolio-wrap">
                <img src={Artist1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 1</h4>
                  <p>Card</p>
                  <div className="portfolio-links">
                    <a
                      href="src/Pages/Arts/portfolio-7.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 1"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-card"
              style={{ position: "absolute", left: "0px", top: "480px" }}
            >
              <div className="portfolio-wrap">
                <img src={Artist1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 3</h4>
                  <p>Card</p>
                  <div className="portfolio-links">
                    <a
                      href="src/Pages/Arts/portfolio-8.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Card 3"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 portfolio-item filter-web"
              style={{
                position: "absolute",
                left: "760px",
                top: "594px",
                display: "none",
              }}
            >
              <div className="portfolio-wrap">
                <img src={Artist1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <div className="portfolio-links">
                    <a
                      href="src/Pages/Arts/portfolio-9.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="Web 3"
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details">
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};
