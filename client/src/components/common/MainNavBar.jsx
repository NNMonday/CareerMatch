import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import English from "../../app/assets/icons/united-states.png";
import Offcanvas from 'react-bootstrap/Offcanvas';

const MyNavLink = ({ to, children }) => {
  const location = useLocation();

  const isActive = location.pathname === to; // Concise isActive check

  const classes = `navlink-default ms-4 ${isActive ? 'navlink-active' : 'text-secondary'}`; // Template literals for classNames

  return (
    <Nav.Link to={to} className={classes}>
      {children}
    </Nav.Link>
  );
};
export default function MainNavbar() {
  return (
    <Navbar key={'sm'} expand={'sm'} className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              GROUP6
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <MyNavLink to={"/"}>Home</MyNavLink>
              <MyNavLink to={"/find/job"}>Find Job</MyNavLink>
              <MyNavLink to={"/pricing"}>Pricing Plans</MyNavLink>
              <MyNavLink to={"/support"}>Customer Supports</MyNavLink>
            </Nav>
            <div className="d-sm-flex justify-content-center gap-2 flex-md-wrap">
              <Nav
                className=""
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#" disabled>
                  <span>
                    <FontAwesomeIcon icon={faPhoneVolume} />
                    +84-202-555-0178
                  </span>
                </Nav.Link>
              </Nav>
              <Form className="d-sm-flex gap-2 flex-nonwrap">
                <Form.Label className="lh-lg"> <img src={English} width={25} alt="english" /></Form.Label>
                <Form.Select >
                  <option>English</option>
                  <option>Vietnamese</option>
                </Form.Select>
              </Form>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}