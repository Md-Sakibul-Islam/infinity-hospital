import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import './Service.css'
import arrow from '../../images/next.png'
import { useHistory } from "react-router-dom";
const Service = (props) => {
    const{img,title,describe,id}= props.service;
    const history = useHistory();

    const url = `/servicesdetails/${id}`
    const handleReadMore = ()=>{
      history.push(url);
    }
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
            <Button onClick={handleReadMore} variant="secondary">Read More  <img src={arrow}  alt="" /></Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
