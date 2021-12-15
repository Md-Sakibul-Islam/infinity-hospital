import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ServicesDetails.css";

const ServicesDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const item = details?.filter((value) => value.id == id);
  

  return (
    <div className="service-details mt-5">
      <div className="container-fluid">
        <div data-aos='fade-up' className="doctor-details">
          <Row>
            <Col md={4} sm={12} lg={4}>
              <div>
                <img
                  className="img-fluid  rounded"
                  src={item[0]?.bgImg}
                  alt=""
                />
                <h4>{item[0]?.title}</h4>
                <p className="mission">
                  Our Mission Is To Deliver Highest Level Of Care To Patients.
                </p>
              </div>
            </Col>
            <Col className="overview" sm={12} md={6} lg={6}>
              <h2>Overview</h2>
              <p className="details">{item[0]?.describe}</p>
            </Col>
          </Row>
        </div>

        <div data-aos='fade-up' className="doctor-details mt-5">
          <Row>
            <Col md={4} sm={12} lg={4}>
              <div className="doctor-img">
                <img className="img-fluid rounded" src={item[0]?.dImg} alt="" />
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <h2>Our Experts</h2>
              <p className="details">
                We offer extensive medical procedures to outbound and inbound
                patients what it is and we are very proud of achievement of our
                staff, We are all work together to help our all patients for
                recovery
              </p>
              <h4>Name: {item[0]?.dName}</h4>
              <h5>Position:{item[0]?.depth}</h5>
              <Button variant="danger">Book an Appointment</Button>
            </Col>
          </Row>
        </div>
      </div>

     
    </div>
  );
};

export default ServicesDetails;
