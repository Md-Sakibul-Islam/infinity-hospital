import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ShowPackage from "../ShowPackage/ShowPackage";
import './HealthCarePackage.css'

const HealthCarePackage = () => {
  const [pack, setPack] = useState([]);
  useEffect(() => {
    fetch("./health.json")
      .then((res) => res.json())
      .then((data) => setPack(data));
  }, []);
  return (
    <div className="health-package">
      <div className="container mt-3">
       <h3> Comprehensive <span className="text-danger">Health </span> Screening <span className="text-danger">Packages</span> for all.</h3>
       <p>Keep a check on your
        health with expert diagnosis and care</p>
      </div>
      <Container className="mt-5">
        <Row xs={1} md={3} className="g-4">
          {pack.map((packs) => (
            <ShowPackage packs={packs} key={packs.id}></ShowPackage>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HealthCarePackage;
