import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import forRent from './rent/RentProperties';

function Sliders() {
  return ( 
    <section>
      <Container>
        <Row>
          <Col lg='8' className='ms-auto me-auto'>
          <Carousel>
            {forRent.map((item) =>(
              <Carousel.Item data-bs-theme="dark" key={item.id}>
              <Card>
              <Card.Img 
                  autoPlay
                  muted 
                  loop
                  as='video'
                  variant="top"
                  alt="House Image"
                  src={item.video}
                  height= '400px'
                  width='100%'
                />
                <Carousel.Caption>
                <Card.Title>{item.type}</Card.Title>
                  <Card.Text>{item.address}</Card.Text>
                  <Card.Text>
                    {item.bedRooms} Bedrooms | {item.bathRooms} Bathrooms{" "}
                  </Card.Text>
                </Carousel.Caption>
              </Card>
            </Carousel.Item>
            ))}
          </Carousel>
          </Col>
        </Row>
      </Container>
      
    </section>
    
   );
}

export default Sliders;
