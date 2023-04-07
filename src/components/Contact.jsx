import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ContactForm from './ContactForm';
import contactBackground from '../img/property6.jpg'

function ContactUs() {
    return (
        <div
            style={{
                backgroundImage: `url(${contactBackground})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }}
            className='py-5'>
        <Container>
          <Row>
            <Col className="ms-auto me-auto" lg="8">
              <Card
                style={{
                  borderColor: "rgb(12, 149, 151)",
                  borderWidth: "3px",
                }}
                className="p-5"
                >
                <div className="cotact-us-header text-center mb-3">
                    <h1 className="card-title">
                        Contact Us
                    </h1>
                </div>
                <ContactForm />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default ContactUs;