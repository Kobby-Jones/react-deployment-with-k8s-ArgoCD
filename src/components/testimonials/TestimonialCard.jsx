import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import customers from './TestimonialArrays'
import backgroundImage from "../../img/image_3.jpg"

const TestimonialCard = () => {
  return (
    <>
    <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="text-center py-5"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <h2 className="fw-bolder text-light mb-3">Customer Testimonials</h2>
        </div>
        <div className="p-4">
        <Container>
      <Row>
        {customers.map((customer) => (
          <Col lg="4" key={customer.id}>
          <Card className='text-center p-3 mb-3'>
            <Row>
              <Col lg="4" className='ms-auto me-auto'>
              <Card.Img className='rounded-circle' src= {customer.image} />
              </Col>
            </Row>
        <Card.Text>
          {customer.testimony}
        </Card.Text>
        <Card.Title>{customer.name}</Card.Title>
      </Card>
          </Col>
        ))}
        
      </Row>
    </Container>
        </div>
      </section>
    
    
    </>
  );
    }


export default TestimonialCard;