import React, { useState } from "react";

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faBars } from "@fortawesome/free-solid-svg-icons";

const Navbarx = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" dark id="mainNav" expand="md">
        <Container>
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <FontAwesomeIcon icon={faLaptopCode} /> Alexis Mora
          </a>
          <NavbarToggler className="font-weight-bold bg-primary rounded" onClick={toggle} />
          <Collapse isOpen={isOpen} navbar id="navbarResponsive">
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">About Me</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
  );
};

export default Navbarx;
