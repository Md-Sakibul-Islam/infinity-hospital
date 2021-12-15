import React from "react";
import { Col, Row } from "react-bootstrap";
import notFound from "../../images/notfound.jpg";

const NotFound = () => {
  return (
    <div className="container ">
      <Row>
        <Col className="text-center" col={10} md={10} lg={10}>
          <img className="img-fluid w-75" src={notFound} alt="" />
        </Col>
      </Row>
    </div>
  );
};

export default NotFound;
