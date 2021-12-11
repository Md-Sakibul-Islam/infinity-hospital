import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import './Service.css'
import arrow from '../../images/next.png'
const Service = (props) => {
    const{img,title,describe}= props.service;
  return (
    <div>
      <Col>
        <Card data-aos="fade-up" className="services-card p-3">
          <div className="text-center"><Card.Img variant="top" className="w-25" src={img} /></div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
             {describe.slice(0,100)}
            </Card.Text>
            <Button variant="secondary">Read More  <img src={arrow}  alt="" /></Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
