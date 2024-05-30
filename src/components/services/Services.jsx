import React from "react";
import { Container } from "react-bootstrap";
import ServicesRow from "./ServicesRow";
import About from "../About";
import backgroundImage from '../../img/background_img_1.jpg'

function Services() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <Container className="py-4">
        <About />
        <div className="services-head text-center pt-3">
          <h2 className="text-uppercase text-light">Our services</h2>
        </div>
        <div className="line">
          <hr
            className="text-light"
            style={{
              width: "100%",
            }}
          />
        </div>
        <ServicesRow />
      </Container>
    </div>
  );
}

export default Services;
