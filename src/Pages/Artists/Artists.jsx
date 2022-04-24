import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import image from "../Home/Artist1.jpeg";
import Art1 from "../Home/Art1.jpeg";
import Art2 from "../Home/Art2.jpeg" 
import "../Artists/Artists.css";
import { Link } from "react-router-dom";

export const Artists = () => {
  return (
    <div>
      <div className="col-md-12 text-center">
        <h2 className="artist-heading">Our Artists</h2>
        <div className="underline mx-auto"></div>
      </div>
      <div>
        <Container>
          <Row>
            <Col lg={3} md={6} className="d-flex justify-content-center mb-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Prince Joseph</Card.Title>
                  <Card.Text>
                    Professional Painter
                    <br />
                    Age , 25 <br />
                    2 Years Of Experience <br />
                    Many awards achieved<br/>
                  </Card.Text>
                  <Link to="/Profile2" className="btn btn-primary">
                    Visit Profile
                  </Link>

                  {/* <Button variant="primary">Visit Profile</Button> */}
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} className="d-flex justify-content-center mb-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                  Professional Sketcher
                    <br />
                    Age , 30 <br />
                    6 Years Of Experience <br />
                    Awarded by SkillsArt <br/>
                  </Card.Text>
                  <Link to="/Profile3" className="btn btn-primary">
                    Visit Profile
                  </Link>
                  {/* <Button variant="primary">Visit Profile</Button> */}
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6} className="d-flex justify-content-center mb-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                  Fresher Sculptor
                    <br />
                    Age , 21 <br />
                    0 Years Of Experience <br />
                    No awards achieved<br/>
                  </Card.Text>
                  <Link to="/Profile3" className="btn btn-primary">
                    Visit Profile
                  </Link>
                  {/* <Button variant="primary">Visit Profile</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="d-flex justify-content-center mb-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Link to="/Artist_Des" className="btn btn-primary">
                    Visit Profile
                  </Link> */}
                  <Button variant="primary">Visit Profile</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="d-flex justify-content-center mb-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Prince Joseph</Card.Title>
                  <Card.Text>
                    Professional Painter
                    <br />
                    Age , 25 <br />
                    2 Years Of Experience <br />
                  </Card.Text>
                  {/* <Link to="/Artists" className="btn btn-primary">
                    Visit Profile
                  </Link> */}

                  <Button variant="primary">Visit Profile</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="d-flex justify-content-center mb-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Link to="/Artists" className="btn btn-primary">
                    Visit Profile
                  </Link> */}
                  <Button variant="primary">Visit Profile</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="d-flex justify-content-center mb-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Prince Joseph</Card.Title>
                  <Card.Text>
                    Professional Painter
                    <br />
                    Age , 25 <br />
                    2 Years Of Experience <br />
                  </Card.Text>
                  {/* <Link to="/Artists" className="btn btn-primary">
                    Visit Profile
                  </Link> */}

                  <Button variant="primary">Visit Profile</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="d-flex justify-content-center mb-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Link to="/Artists" className="btn btn-primary">
                    Visit Profile
                  </Link> */}
                  <Button variant="primary">Visit Profile</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* <Row>
            <Col lg={3} md={6} className="d-flex justify-content-center mb-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Prince Joseph</Card.Title>
                  <Card.Text>
                    Professional Painter
                    <br />
                    Age , 25 <br />
                    2 Years Of Experience <br />
                  </Card.Text> 
                   <Link to="/Artists" className="btn btn-primary">
                    Visit Profile
                  </Link> 

                   <Button variant="primary">Visit Profile</Button>
                </Card.Body>
              </Card>
            </Col>


            // SECOND
            <Col lg={3} md={6} className="d-flex justify-content-center mb-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Link to="/Artists" className="btn btn-primary">
                    Visit Profile
                  </Link> 
                  <Button variant="primary">Visit Profile</Button>
                </Card.Body>
              </Card>
            </Col>
            // THiRD
            <Col lg={3} md={6} className="d-flex justify-content-center mb-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                   <Link to="/Artist_Des" className="btn btn-primary">
                    Visit Profile
                  </Link> 
                  <Button variant="primary">Visit Profile</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="d-flex justify-content-center mb-2">
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                   <Link to="/Artist_Des" className="btn btn-primary"> 
                    Visit Profile
                  </Link> 
                  <Button variant="primary">Visit Profile</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>  */}
        </Container>
      </div>
    </div>
  );
};
