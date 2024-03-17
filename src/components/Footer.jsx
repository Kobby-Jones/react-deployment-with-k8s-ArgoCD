import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GrFacebook, GrTwitter, GrInstagram } from 'react-icons/gr'
import { FaWhatsappSquare } from 'react-icons/fa';

function Footer() {
    return (
      <footer className="bg-dark py-4">
        <Container>
          <Row>
            <Col lg="3">
              <div className="text-center">
                <h5 className="text-light text-uppercase text-decoration-underline">
                  About Us
                </h5>
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
            <Col lg="3">
              <div className="text-center">
                <h5 className="text-light text-uppercase text-decoration-underline">
                  Contact Us
                </h5>
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
            <Col lg="3" className="text-center">
              <div className="text-center">
                <h5 className="text-uppercase text-light text-decoration-underline">
                  Information
                </h5>
              </div>
              <ul className="list-unstyled">
                <li>
                  <Link
                    className="text-decoration-none fs-5 text-secondary"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none fs-5 text-secondary"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none fs-5 text-secondary"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none fs-5 text-secondary"
                    to="/sales"
                  >
                    For Sale
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none fs-5 text-secondary"
                    to="/rent"
                  >
                    For Rent
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-decoration-none fs-5 text-secondary"
                    to="/about"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg="3">
              <div className="text-center">
                <h5 className="text-light text-uppercase text-decoration-underline">
                  Social Media
                </h5>
              </div>
              <div className="text-center">
                <a href="https://facebook.com" rel="noreferrer" target="_blank">
                  <GrFacebook className="me-3" size={32} color="#1877f2" />
                </a>
                <a
                  href="https://instagram.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GrInstagram
                    className="me-3"
                    size={32}
                    color="white"
                    style={{
                      background:
                        "linear-gradient(to bottom right, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
                    }}
                  />
                </a>
                <a
                  href="https://twitter.com/Kobby_jones1"
                  rel="noreferrer"
                  target="_blank"
                >
                  <GrTwitter size={32} className="me-3" color="#1DA1F2" />
                </a>
                <a href="whatsapp.com">
                  <FaWhatsappSquare
                    size={32}
                    color="#ffffff"
                    style={{
                      backgroundColor: "#25D366",
                    }}
                  />
                </a>
              </div>
            </Col>
          </Row>
          <div className="line">
            <hr className="text-light" width="100%" />
          </div>
          <div className="text-center">
            <h6 className="text-light">
              Copyright &copy; 2023, Kobby-J Real-Estate Ltd.
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