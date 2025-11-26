"use client";
import Image from "next/image";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome, FaBuilding, FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  
  return (
    <>
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/images/sokow-logo.png" width={100} height={90} alt="logo"/>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center gap-lg-3">
            <Nav.Link href="/">
              <FaHome className="me-2 text-color" />
              Accueil
            </Nav.Link>

          <Nav.Link href="#featured">
              <FaBuilding className="me-2 text-color" />
              About
            </Nav.Link>

            <Nav.Link href="#properties">
              <FaBuilding className="me-2 text-color" />
              Proposition
            </Nav.Link>

            <Nav.Link href="#contact">
              <FaPhoneAlt className="me-2 text-color" />
              Contact
            </Nav.Link>

            
            <button className="btn btn-dark">Programmer visite</button>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
