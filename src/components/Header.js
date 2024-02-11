import React from "react";
import Logo from "../assets/tabapay-logo.png";
import { Row, Col } from "react-bootstrap";
import "./header.css";

function Header() {
  return (
    <header className="headerContainer">
      <Row>
        <Col lg={1} md={2} sm={4}>
          <img src={Logo} alt="Logo" />
        </Col>
        <Col lg={2} md={5} sm={4}></Col>
        <Col lg={9} md={5} sm={4}>
          <p className="headerText">Welcome to Alex's Dynamic Menu!</p>
        </Col>
      </Row>
    </header>
  );
}

export default Header;
