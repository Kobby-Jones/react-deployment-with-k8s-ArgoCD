import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from './ContactForm';

function ContactUs() {
    return ( 
        <div>
            <Container>
                <Row>
                    <Col className='ms-auto me-auto' lg='8'>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
        </div>
        
     );
}

export default ContactUs;