import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import fbLogo from "../../images/fb.png";
import inLogo from "../../images/in.png";
import twLogo from "../../images/tw.png";
import locationLogo from "../../images/loc.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <Row>
        <Col sm={12} md={4} lg={4}>
          <div className="">
            <h2>About Infinity Hospital</h2>
            <div className="ms-3">
              <p style={{ lineHight: "40px" }}>
                The IH, provides free services to the poor & needy including
                free treatment. Surgeries, diagnostics, imaging, free food, free
                medicines and follow-up care by devoting resources and expertise
                to the investigations of problems contributing to health
                disparities…
              </p>
              <div>
                <img
                  src={fbLogo}
                  style={{ width: "40px", padding: "2px", cursor: "pointer" }}
                  className="img-fluid"
                  alt=""
                />
                <img
                  src={inLogo}
                  style={{ width: "40px", padding: "2px", cursor: "pointer" }}
                  className="img-fluid"
                  alt=""
                />
                <img
                  src={twLogo}
                  style={{ width: "40px", padding: "2px", cursor: "pointer" }}
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div className="text-center mt-3">
            <h2 className="ms-3">Quick Links</h2>
            <div className="ms-5">
              <Nav.Link className="text-light">-Visiting Information</Nav.Link>
              <Nav.Link className="text-light">
                -Information For Caretakers
              </Nav.Link>
              <Nav.Link className="text-light">-Blog</Nav.Link>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div className="text-center mt-3">
            <h2 className="ms-3">Our Location</h2>
            <div className="ms-5">
              <div className="text-center">
                <img style={{ width: "70px" }} src={locationLogo} alt="" />
              </div>
              <div className="text-center">
                <h6>Rajshahi,Laxmipur</h6>
                <h6>Center Road :-03</h6>
                <h6>In front of Bank Asia</h6>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
