import React from 'react';
import { Col } from 'react-bootstrap';
import TestimonialCard from './TestimonialCard';

function TestimonialCol() {
    return ( 
        <Col xs="4">
            <TestimonialCard />
        </Col>
     );
}

export default TestimonialCol;