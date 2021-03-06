import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./About.css";
import sakthi from "../../images/sakthiAmma.jpg";
import a1 from "../../images/award1.jpg";
import a2 from "../../images/award2.jpg";
import a3 from "../../images/award3.jpg";
import a4 from "../../images/award4.jpg";
import callLogo from "../../images/call.png";
import locationLogo from "../../images/location.png";
import ambulance from "../../images/ambulance.png";

const About = () => {
  return (
    <div  id="about" className="container  about-section">
      {/* Here is the about section  */}
      <Row>
        <Col sm={12} md={8} lg={8}>
          <div data-aos="fade-right">
            <h2 className="text-danger">Sri Sakthi Amma</h2>
            <p>
              Sri Sakthi Amma was born on the third of January, 1976, to Shri.
              Nanda Gopal and Smt. Jyothiamma. It was evident from birth that
              this baby was divine and very special. A distinct, divine ray of
              light (Namam) on the babys forehead was vividly visible, along
              with symbols of Chakra (wheel) and Shanka (conch) on either side
              of the chest. Through this, the divine connection was established
              and people recognized the child as very special. From a very early
              age, the child began showing great interest in spiritual life. The
              child demonstrated profound interest only in spiritual life,
              participated blissfully in Pujas/Bhajans (religious ceremonies),
              and insisted on visiting places of worship on a daily basis. On
              the Eighth of May, 1992, Sri Sakthi Amma proclaimed to the people,
              the avatar of Goddess Sri Narayani and the purpose.
            </p>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <div data-aos="fade-up">
            <img className="img-fluid rounded mt-5" src={sakthi} alt="" />
          </div>
        </Col>
      </Row>

{/* Here is the awards section  */}
      <div data-aos="" className="mt-5">
        {" "}
        <span className="text-center text-danger">
          {" "}
          <h2>
            {" "}
            <span>Infinity Hospital </span> Awards
          </h2>
          <hr />
        </span>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <div className="award-info ">
              <h4>
                With the Divine Blessings of Our Beloved Sri Sakthi Amma,
                Infinity Hospital & Research Centre received the following
                Awards:
              </h4>
              <p>
                ??????Best Hospital Award??? by Rotary Club of Vellore Fort for the
                year 2006 <br />??? ???Excellence Award??? in promoting global
                integration at Kathmandu, Nepal on 7th February 2007 <br />???
                ???Appreciation Award??? by Indian Redcross Blood Bank Chittoor
                District for the year 2007 <br /> ??? ???Achievement Award??? by Azeez
                ??? Chida foundation, Ottawa, Canada and Indian Medical
                Association ??? Dr. A.M. Ikrams Social Welfare Trust Vellore on
                27.10.2007 <br /> ??? ???Award of Honor??? presented to SNH&RC by
                ???Connecting with Children???- Schneider Children???s Medical Centre
                of Israel 2009 <br /> ??? ???Best Community Service Award??? Indian
                Medical Association Vellore Branch for the year 2010 <br /> ???
                ???Best Management (Nirvaga Semmal) Award by Indian Medical
                Association 2010 <br /> ??? ???Humanitarian Award??? by Sri Narayani
                Peedam for the year 2011 <br /> ??? Tamil Nadu Government Health
                Insurance Scheme Kalaignar Kapittu Thittam Best Hospital Service
                Award (2011) <br /> ??? Manitha Nalam Kappalar from All India
                Journalist Welfare Association 2016 <br /> ??? Best Non Profit
                Hospital 2017, awarded by FICCI ??? TANCARE & Health & Family
                Welfare, Govt of Tamilnadu LEGEND IN HEALTHCARE Award 2017 by
                Beloved Sri Sakthi Amma <br /> ??? In recognition of significant
                contribution for advancement of Medical Sciences Our Honourable
                Dr.N.Balaji Director & Trustee SNHRC has been elected Member of
                the National Academy of Medical Sciences (India) in the year
                2018. <br /> ??? "Bharat Vikas Award" Institute of Self-Reliance,
                Odisha 2018. <br /> ??? Dr N Balaji, Director & Trustee SNHRC
                receives at 4th International Health care awards 2019, Time
                Cybermedia in the Award category: Best health care provider in
                Vellore, TamilNadu from BCCI Board Member ??? Cricketer &
                commentator Shri Sunil Gavaskar held at Mumbai, India on May 18,
                2019.
              </p>
            </div>
          </Col>
        </Row>
        <Row data-aos="fade-up" xs={1} md={4} className="g-4">
          <Col>
            <Card className="about-card-img">
              <Card.Img variant="top"  src={a1} />
              <Card.Body>
                <Card.Title>"Best Hospital Award"</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="about-card-img">
              <Card.Img variant="top" src={a2} />
              <Card.Body>
                <Card.Title>"Excellence Award"</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="about-card-img">
              <Card.Img variant="top" src={a3} />
              <Card.Body>
                <Card.Title>"Appreciation Award???</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="about-card-img">
              <Card.Img variant="top" src={a4} />
              <Card.Body>
                <Card.Title> " Award of Honor "</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Here is the communication section  */}

      <div className="container communication-section">
        <Row>
          <Col md={4} lg={4} sm={12}>
            <div data-aos='fade-up' className="communication-part">
              <div className="text-center">
                <img className="w-25 mb-4" src={callLogo} alt="" />
              </div>
              <div className="text-center">
                <h5>Have A Question? Call Us Now</h5>
                <h6>+880172700000</h6>
                <h6>+880182700000</h6>
                <h6>+880192700000</h6>
              </div>
            </div>
          </Col>
          <Col md={4} lg={4} sm={12}>
            <div data-aos='fade-up'   className="communication-part">
              <div className="text-center">
                <img className="w-25 mb-4" src={locationLogo} alt="" />
              </div>
              <div className="text-center">
                <h5>Our Location</h5>
                <h6>Rajshahi,Laxmipur</h6>
                <h6>Center Road :-03</h6>
                <h6>In front of Bank Asia</h6>
              </div>
            </div>
          </Col>
          <Col md={4} lg={4} sm={12}>
           <div data-aos='fade-up'   className="communication-part" >
           <div className="text-center">
              <img className="w-25 mb-4" src={ambulance} alt="" />
            </div>
            <div className="text-center">
              <h5>Emergency Ambulance</h5>
              <h6>+8801327000000</h6>
              <h6>+8801417000000</h6>
              <h6>+8801517000000</h6>
            </div>
           </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
