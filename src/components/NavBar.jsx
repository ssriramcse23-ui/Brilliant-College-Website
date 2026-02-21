import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './css/Navbar.css';

function NavBar() {
  return (
    <div>
      {/* Logo at the top, centered */}
      <Container className='text-center my-3'>
        <img
          src="logo.webp"
          alt="logo"
          className="img-fluid"
          style={{ maxWidth: '800px' }}
        />
      </Container>

      {/* Navbar below logo */}
      <Navbar bg="light" expand="lg" variant="light" className="shadow-sm py-2">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-3 fw-semibold text-uppercase">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>

              <NavDropdown title="Courses" id="courses-dropdown">
                <NavDropdown.Item href="#ITEP-BSc-BEd">ITEP BSc.B.Ed.</NavDropdown.Item>
                <NavDropdown.Item href="#BEd-2years">B.Ed. - 2 years</NavDropdown.Item>
                <NavDropdown.Item href="#BA">B.A.</NavDropdown.Item>
                <NavDropdown.Item href="#BCom">B.Com.</NavDropdown.Item>
                <NavDropdown.Item href="#BSc">B.Sc.</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#Faculties">Faculties</Nav.Link>
              <Nav.Link href="#Infrastructure">Infrastructure</Nav.Link>
              <Nav.Link href="#LatestEvents">Latest Events</Nav.Link>
              <Nav.Link href="#StudentDetails">Student Details</Nav.Link>
              <Nav.Link href="#Documents">Documents</Nav.Link>
              <Nav.Link href="#Gallery">Gallery</Nav.Link>
              <Nav.Link href="#VideoGallery">Video Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
