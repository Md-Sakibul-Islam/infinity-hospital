import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="services" className="container  mt-5">
      <div data-aos="fade-up">
      <h3>Our Services </h3>
      <h4> <span className="text-danger">Honesty</span> is our <span className="text-danger">Quality</span> </h4>

      </div>
      <Row xs={1} md={3} className="g-4 mt-4">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
