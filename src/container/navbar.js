import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  UncontrolledDropdown,
} from "reactstrap";
import { setModal } from "../redux/redux-slice/modalSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    var element = document.querySelector("#close");
    if (!isOpen) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  };
  const handleModal = () => {
    const action = setModal("dark");
    dispatch(action);
  };
  return (
    <div className="main-navbar">
      <Navbar expand="md">
        <NavbarBrand href="/home">reactstrap</NavbarBrand>
        <div className="navbar-toggler">
          <svg
            id="close"
            className="ham hamRotate ham4 "
            viewBox="0 10 100 80"
            width="70"
            onClick={toggle}
          >
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path className="line middle" d="m 70,50 h -40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
          </svg>
        </div>

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="my-auto">
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
                <div>
                  <NavLink to="/loading">Option 3</NavLink>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleModal}
                  >
                    Option 4
                  </button>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
