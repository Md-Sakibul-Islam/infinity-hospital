import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import './ShowPackage.css'
const ShowPackage = (props) => {
  const { img, price, title, gender } = props.packs;

  return (
    <div>
      <Col>
       <div data-aos="fade-up">
       <Card className="package-card mt-5">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{gender}</Card.Text>
            <Card.Text> Price: {price} Tk</Card.Text>
           <Button variant="secondary" >View Details</Button>
          </Card.Body>
        </Card>
       </div>
      </Col>
    </div>
  );
};

export default ShowPackage;
