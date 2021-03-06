import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import wel from '../../images/welcome.png'
import './Welcome.css'

const Welcome = () => {
  
    return (
        <div className='welcome-container'>
           <Container>
           <Row>
                <Col   data-aos="fade-right" md={6}  sm={12} lg={5}>
                  <div  className="welcome-section">
                  <div className=' d-flex justify-content-center align-items-center mt-5'>
                  <div>
                  <h2>Welcome To <span className='text-danger'>Infinity Hospital</span> </h2>
                    <p>It is Dipu divine vision which inspired the establishment of Infinity  Hospital & Research Centre. The institution is situated in Rajshahi, a tiny hamlet about 300km kilometres from Dhaka. Its prime objective since inception is to provide quality medical service to the less privileged rural population,at a level on par with hospitals of metropolitan cities.</p>
                  </div>
                  </div>
                  </div>
                </Col>
                <Col md={6}  sm={12} lg={6}>
                   <div data-aos="fade-left">
                   <img src={wel} className='img-fluid w-75' alt="" />

                   </div>
                </Col>
            </Row>
           </Container>
            
        </div>
    );
};

export default Welcome;