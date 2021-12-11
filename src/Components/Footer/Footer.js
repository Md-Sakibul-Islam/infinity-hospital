import React from "react";
import { Col, Nav, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Row>
        <Col sm={12} md={4} lg={4}>
         <div className="">
         <h2>About Infinity Hospital</h2>
          <div className="ms-3">
            <p style={{lineHight:'40px'}}>
              The IH, provides free services to the poor & needy including free
              treatment. Surgeries, diagnostics, imaging, free food, free
              medicines and follow-up care by devoting resources and expertise
              to the investigations of problems contributing to health
              disparities…
            </p>
          </div>
         </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
         <div className="text-center mt-3">
         <h2 className="ms-3">Quick Links</h2>
          <div className="ms-5">
            <Nav.Link className="text-light">Our Specialist</Nav.Link>
            <Nav.Link className="text-light">Our Specialist</Nav.Link>
            <Nav.Link className="text-light">Our Specialist</Nav.Link>
            <Nav.Link className="text-light">Our Specialist</Nav.Link>
          </div>
         </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div className="text-center mt-3">
          <h2 className="ms-3">Our Services</h2>
          <div className="ms-5">
            <Nav.Link className="text-light">Our Specialist</Nav.Link>
            <Nav.Link className="text-light">Our Specialist</Nav.Link>
            <Nav.Link className="text-light">Our Specialist</Nav.Link>
            <Nav.Link className="text-light">Our Specialist</Nav.Link>
          </div>
          </div>
          
        </Col>
      </Row>
     
    </div>
  );
};

export default Footer;
