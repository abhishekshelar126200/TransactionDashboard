import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import about from "../assets/about.jpg";

const About = () => {
  return (
    <>
      <header className="py-1 bg-primary text-white text-center shadow">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeIn">About Platform</h1>
          <p className="lead animate__animated animate__fadeIn animate__delay-1s">
            Empowering Data-Driven Decision Making
          </p>
        </div>
      </header>
      <Container className="my-5">
        <Row className="align-items-center">
          {/* Left Side - Image */}
          <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
            <Image src={about} alt="About Us" fluid rounded className="w-75" />
          </Col>
          
          {/* Right Side - Description */}
          <Col xs={12} md={6}>
            <ul className="list-unstyled">
              <li className="mb-3">🚀 Cutting-edge platform providing deep insights into sales transactions.</li>
              <li className="mb-3">📊 Powerful analytics and data visualization for better decision-making.</li>
              <li className="mb-3">⚙️ Built on the MERN (MongoDB, Express.js, React, Node.js) stack.</li>
              <li className="mb-3">🔄 Ensures seamless data processing and high-performance querying.</li>
              <li className="mb-3">📈 Interactive dashboards to track and analyze transactions efficiently.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;