import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
} from "reactstrap";
import Router from "../router/router";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="main-navbar">
      <Navbar color="light" className="" expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem style={{ alignSelf: "center" }}>
              <NavLink to="/">Component</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <div>
                  <NavLink to="/product">Option 1</NavLink>
                </div>

                <div>
                  <NavLink to="/login">Option 2</NavLink>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      <Router />
    </div>
  );
};

export default NavBar;
