import React from "react";
import { Card, Col } from "react-bootstrap";
import './Doctor.css'

const Doctor = (props) => {
  const {name,img, depth, position,degree} = props.doctor;
 
  return (
    <div className="doctor-section">
      <Col>
        <Card className="doctor-card-div">
         <div className="text-center"> <Card.Img variant="top"  src={img} /></div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {degree}
            </Card.Text>
            <Card.Text>
              {depth}
            </Card.Text>
            <Card.Text>
              {position}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Doctor;
