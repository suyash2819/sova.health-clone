import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "../Css/Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Navbar.Brand>
        <Link to="/" className="nav-link logo">
          <img
            alt="sova_FINAL-02.png"
            src="https://static.wixstatic.com/media/885c0e_33bd8c6486544c679a27ee20392a5932~mv2.png/v1/fill/w_165,h_60,al_c,q_85,usm_0.66_1.00_0.01/sova_FINAL-02.webp"
            style={{ width: "165px", height: "60px", objectFit: "cover" }}
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Navbar.Text style={{ padding: "0px" }}>
            <NavLink activeClassName="active" exact to="/" className="nav-link">
              HOME
            </NavLink>
          </Navbar.Text>
          <Navbar.Text style={{ padding: "0px" }}>
            <NavLink
              exact
              to="/howitworks"
              activeClassName="active"
              className="nav-link"
            >
              HOW IT WORKS
            </NavLink>
          </Navbar.Text>
          <Navbar.Text style={{ padding: "0px" }}>
            <NavLink
              activeClassName="active"
              exact
              to="/pricing"
              className="nav-link"
            >
              PRICING
            </NavLink>
          </Navbar.Text>
          <Navbar.Text style={{ padding: "0px" }}>
            <NavLink
              activeClassName="active"
              exact
              to="/science"
              className="nav-link"
            >
              SCIENCE
            </NavLink>
          </Navbar.Text>
          <Navbar.Text style={{ padding: "0px" }}>
            <NavLink
              activeClassName="active"
              exact
              to="/faqs"
              className="nav-link"
            >
              FAQS
            </NavLink>
          </Navbar.Text>
          <Navbar.Text style={{ padding: "0px" }}>
            <NavLink
              activeClassName="active"
              exact
              to="/aboutus"
              className="nav-link"
            >
              ABOUT US
            </NavLink>
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
      <Nav className="getStartedLink">
        <Navbar.Text style={{ padding: "0px" }}>
          <Link to="/getstarted" className="nav-link getStartedtext">
            <b>GET STARTED</b>
          </Link>
        </Navbar.Text>
      </Nav>
    </Navbar>
  );
};

export default Header;
