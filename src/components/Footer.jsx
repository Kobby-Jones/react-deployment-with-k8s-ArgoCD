import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
    return (
      <footer className="bg-dark py-4">
        <Container>
          <Row>
            <Col lg="6">
              <div className="text-center">
                <h1 className="text-light">About Us</h1>
              </div>
              <div className="text-center">
                <p className="text-light">
                  Kobby-J Real Estate Ltd. is an Accra-based real estate
                  business, offering quality solutions for all your property
                  needs. Whether you're looking to buy, rent, or invest in the
                  Accra area, Kobby-Jones is the team to trust. With years of
                  experience, we ensure you get the best value for your money.
                </p>
              </div>
            </Col>
            <Col>
              <div className="text-center">
                <h1 className="text-light">Contact Us</h1>
              </div>
              <div className="text-center">
                <ul className="list-unstyled">
                  <li className="text-light">1234 Main Street</li>
                  <li className="text-light">Sunyani 12345</li>
                  <li className="text-light">+(233) 504843410</li>
                  <li className="text-light">info@kobbyjrealestate.com</li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="line">
            <hr className="text-light" width="100%" />
          </div>
          <div className="text-center">
            <h6 className="text-light">
              Coppyright &copy; 2023, Kobby-J Real-Estate Ltd.
            </h6>
          </div>
          <div className="text-center">
            <h6 className="text-light">
              Designer:{" "}
              <a className="text-warning" href="https://github.com/Kobby-Jones">
                Kobby Jones
              </a>{" "}
            </h6>
          </div>
        </Container>
      </footer>
    );
}

export default Footer;