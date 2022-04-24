import React from "react";
import {  Card, Col, Container, Row } from "react-bootstrap";
import { Slider } from "../../Components/Slider/Slider";
// import image from "../Home/Artist1.jpeg";
import "../Home/Home.css";
import Artist1 from "../Home/Artist1.jpeg";
// import Artist4 from "../Home/Artist4.jpeg";
import Artist6 from "../Home/Artist6.jpeg";
// import Artist5 from "../Home/Artist5.jpeg";
import Artist7 from "../Home/Artist7.jpeg";
import { Link } from "react-router-dom";
import Art11 from "../Home/Art11.jpeg";
import Art2 from "../Home/Art2.jpeg";
import Art3 from "../Home/Art3.jpeg";


export const Home = () => {
  return (
    <div>
      <Slider />
      {/* **********ARTS INTRO********** */}
      <div className="col-md-12 text-center">
        <h2 className="arts-heading">Our Arts</h2>
        <div className="underline mx-auto"></div>
      </div>

      <section id="portfolio" className="portfolio">
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
                <li data-filter=".filter-web" className="">
                  Handicrafts
                </li>
              </ul>
            </div>
          </div>

          <div
            className="row portfolio-container aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={Art11} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  {/* <h4>App 1</h4>
                  <p>App</p> */}
                  <div className="portfolio-links">
                    <a
                      href={Art11}
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

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={Art2} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  {/* <h4>Web 3</h4>
                  <p>Web</p> */}
                  <div className="portfolio-links">
                    <a
                      href={Art2}
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

            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={Art3} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  {/* <h4>App 2</h4>
                  <p>App</p> */}
                  <div className="portfolio-links">
                    <a
                      href={Art3}
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
          </div>
        </div>
      </section>
      {/* *********ARTIST INTRO************* */}
      <div className="col-md-12 text-center">
        <h2 className="artists-heading">Our Artists</h2>
        <div
          className="underline mx-auto"
          style={{ marginBottom: "30px" }}
        ></div>
      </div>
      <Container>
        <Row>
          <Col lg={3} md={6} className="d-flex justify-content-center mb-2">
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Artist6} />
              <Card.Body>
                <Card.Title>Prince Joseph</Card.Title>
                <Card.Text>
                  Professional Painter
                  <br />
                  Age , 25 <br />
                  2 Years Of Experience <br />
                  Certified Painter by SkillsArt<br/>
                  5 Achivements Awards<br/>

                </Card.Text>
                <Link to="/Profiles" className="btn btn-primary">
                  Visit Profile
                </Link>

                {/* <Button variant="primary">Visit Profile</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="d-flex justify-content-center mb-2">
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Artist7} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Professional Painter
                  <br />
                  Age , 25 <br />
                  2 Years Of Experience <br />
                  Certified Painter by SkillsArt<br/>
                  5 Achivements Awards<br/>

                </Card.Text>
                <Link to="/Profile2" className="btn btn-primary">
                  Visit Profile
                </Link>
                {/* <Link to="/Artists" className="btn btn-primary">
                  Visit Profile
                </Link> */}
                {/* <Button variant="primary">Visit Profile</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="d-flex justify-content-center mb-2">
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Artist6} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Professional Painter
                  <br />
                  Age , 25 <br />
                  2 Years Of Experience <br />
                  Certified Painter by SkillsArt<br/>
                  5 Achivements Awards<br/>

                </Card.Text>
                <Link to="/Profile3" className="btn btn-primary">
                  Visit Profile
                </Link>
                {/* <Link to="/Artists" className="btn btn-primary">
                  Visit Profile
                </Link> */}
                {/* <Button variant="primary">Visit Profile</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}  className="d-flex justify-content-center mb-2">
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Artist7} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Professional Painter
                  <br />
                  Age , 25 <br />
                  2 Years Of Experience <br />
                  Certified Painter by SkillsArt<br/>
                  5 Achivements Awards<br/>

                </Card.Text>
                <Link to="/Profile3" className="btn btn-primary">
                  Visit Profile
                </Link>
                {/* <Button variant="primary">Visit Profile</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <div className="col-md-12 text-center">
        <h2 className="about-heading">About Us</h2>
        <div className="underline mx-auto"></div>
      </div> */}
      {/* <div></div> */}
    </div>
  );
};
