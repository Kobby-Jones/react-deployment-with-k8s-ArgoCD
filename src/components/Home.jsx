import React from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import video1 from '../img/home-background1.mp4';
import video2 from '../img/home-background3.mp4';
import { Link } from 'react-router-dom';

const HomePage = () => {
  
  useEffect(() => {
        window.scrollTo(0, 0);
  }, []);
  
  return ( 
    <section style={{height: '100vh'}}>
    <Carousel className='mt-4' interval={2000}>
      <Carousel.Item>
        <div className="video-container mt-5">
          <video autoPlay muted loop className="background-video">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Container>
            <Row style={{ marginTop: "150px" }}>
              <Col className="text-center p-3" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <h1 className="text-light fw-bold text-uppercase">Discover your dream home</h1>
                <p className="text-light my-4">
                Welcome to Dreamscape Real Estate Agency Ltd., the leading name in real estate solutions in Accra. Whether you are looking to buy, rent, or invest, we offer exceptional services tailored to meet all your property needs. Our commitment to quality and customer satisfaction sets us apart as the trusted team you can rely on for your real estate journey.
                With years of dedicated service in the Accra real estate market, our seasoned professionals bring a wealth of knowledge and expertise to guide you through the complexities of real estate transactions. We recognize that every client has unique preferences and requirements, and our personalized approach ensures that we find the perfect property that aligns with your lifestyle, budget, and aspirations.
                </p>
                <Link to="about">
                  <Button>Read More</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
      
      <Carousel.Item>
        <div className="video-container">
          <video autoPlay muted loop className="background-video">
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Container>
            <Row style={{ marginTop: "150px" }}>
              <Col className="text-center py-5" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <h1 className="text-light fw-bold text-uppercase">Discover Your Perfect Vacation Home</h1>
                <p className="text-light my-4">
                Are you looking for the perfect place to spend your vacation? Look no further than Dreamscape Real Estate Agency Ltd., your trusted partner in finding idyllic vacation properties in the beautiful city of Accra. Whether you seek a serene retreat or an adventurous getaway, we offer a diverse selection of vacation homes tailored to meet all your needs.
                With years of expertise in the Accra real estate market, our experienced team is dedicated to helping you find the ideal vacation property that aligns with your dreams. Imagine waking up to stunning ocean views, relaxing in luxurious amenities, and exploring the vibrant local culture—all from the comfort of your vacation home.
                </p>
                <Carousel.Caption>
        <Link to="about">
                  <Button>Read More</Button>
                </Link>
        </Carousel.Caption>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
    </section>
  );
};

export default HomePage;
