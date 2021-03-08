import React, { useState } from "react";

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-scroll";

const Navbarx = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      dark
      id="mainNav"
      expand="md"
    >
      <Container>
        <Link
          className="navbar-brand pointer"
          to="masthead"
          spy={true}
          smooth={true}
          duration={500}
        >
          <FontAwesomeIcon icon={faLaptopCode} /> Alexis Mora
        </Link>
        <NavbarToggler
          className="font-weight-bold bg-primary rounded"
          onClick={toggle}
        />
        <Collapse isOpen={isOpen} navbar id="navbarResponsive">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link
                className="nav-link pointer rounded"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About Me
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="nav-link pointer rounded"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
              >
                Portfolio
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarx;
