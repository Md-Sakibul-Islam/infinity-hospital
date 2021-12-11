import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <h3>Our Services </h3>
      <h4> <span className="text-danger">Honesty</span> is our <span className="text-danger">Quality</span> </h4>

      <Row xs={1} md={3} className="g-4 mt-4">
        {services.map((service) => (
          <Service service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
