import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import forRent from './rent/RentProperties';
import backgroundImage from '../img/luxury_villa_2.jpg'

function Sliders() {
  let slideArray = [];
  for(let i = 0; i<=4; i++){
    slideArray.push(forRent[i])
  }
  console.log(slideArray)

  return ( 
    <section style={{
      backgroundImage : `url(${backgroundImage}`
    }}>
      <Container>
        <Row>
          <Col lg='8' className='ms-auto me-auto'>
          <Carousel>
            {slideArray.map((item) =>(
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
                <Carousel.Caption className='rounded-3' style={{
                  backgroundColor:'rgba(0, 74, 173, 0.7)'
                }}>
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
