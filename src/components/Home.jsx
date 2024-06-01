import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundImage from '../img/image_2.jpg'
import { Link } from 'react-router-dom';

const HomePage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return ( 
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${backgroundImage}`,
        height: "80vh",
        backgroundSize: "cover",
        backgroundAttachment: 'fixed'
      }}
    >
      <Container>
        <Row style={{
          
            marginTop: "150px",
        }}>
          <Col
            className="text-center p-3"
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <h1 className="text-light fw-bold text-uppercase">
              Discover your dream home
            </h1>
            
            <p className="text-light my-4">
              KJ Real Estate Agency Ltd. is an Accra-based real estate
              business, offering quality solutions for all your property
              needs. Whether you're looking to buy, rent, or invest in the
              Accra area, Kobby-Jones is the team to trust. With years of
              experience, we ensure you get the best value for your money.
            </p>
            <Link to="about">
            <Button>Read More</Button>
            </Link>
            
          </Col>
        </Row>
      </Container>
    </div>
  )}
export default HomePage;