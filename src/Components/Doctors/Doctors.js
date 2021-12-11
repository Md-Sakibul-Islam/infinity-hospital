import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";
import "./Doctors.css";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="container mt-5 doctors-section">
      <Row>
        <Col data-aos="fade-right" md={6} lg={6} sm={12}>
          <div className="doctor-info">
            <h2>
              Our Dedicated <span className="text-danger">Doctors Team</span>{" "}
            </h2>
            <p>
              We offer extensive medical procedures to outbound and inbound
              patients what it is and we are very proud of achievement of our
              staff, We are all work together to help our all patients for
              recovery
            </p>
          </div>
        </Col>
      </Row>

      <div>
        <Row xs={1} md={4} className="g-4">
          {doctors.map((doctor) => (
            <Doctor doctor={doctor}></Doctor>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Doctors;
