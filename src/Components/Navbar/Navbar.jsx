import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";

export const Navigation = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid className="mx-4">
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold">SkillsArt</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-3">
            <LinkContainer to="/">
              <Nav.Link>
                <b>Home</b>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Arts">
              <Nav.Link>
                <b>Arts</b>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Artists">
              <Nav.Link>
                <b>Artists</b>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
              <Nav.Link>
                <b>About</b>
              </Nav.Link>
            </LinkContainer>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <div>
            <Link to="/Login" className="btn btn-outline-light me-2">
              Log In
            </Link>
            <Link to="/SignUp" className="btn btn-outline-light">
              Sign Up
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
