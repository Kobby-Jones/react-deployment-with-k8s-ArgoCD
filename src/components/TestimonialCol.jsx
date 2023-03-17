import React from 'react';
import { Col } from 'react-bootstrap';
import TestimonialCard from './TestimonialCard';
import customers from './TestimonialArrays';

function TestimonialCol() {
  
    
    return ( 
        
        <Col lg="4">
            <TestimonialCard text={customers.Kobby.testimony } />
        </Col>
     );
}

export default TestimonialCol;