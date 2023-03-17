import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import TestimonialCard from './TestimonialCard';

 function TestimonialRow() {
     return ( 
         <Container>
             <Row>
                 <Col xs="4">
                    <TestimonialCard />
                 </Col>
             </Row>
        </Container>
     );
 }
 
 export default TestimonialRow;