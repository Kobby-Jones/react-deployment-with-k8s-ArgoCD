import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ContactForm from './ContactForm';

function ContactUs() {
    return (
      <div>
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
                <ContactForm />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default ContactUs;