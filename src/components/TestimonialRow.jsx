import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import customers from './TestimonialArrays';
import TestimonialCard from './TestimonialCard';


 function TestimonialRow() {
     return ( 
         <Container>
             <Row>
                 <Col lg="4">
                     <TestimonialCard text={ customers.Kobby.testimony} name= {customers.Kobby.name} />
                 </Col>
                 <Col lg="4">
                     <TestimonialCard text={ customers.Mike.testimony} name= {customers.Mike.name} />
                 </Col>
                 <Col lg="4">
                     <TestimonialCard text={ customers.Tony.testimony} name= {customers.Tony.name} />
                 </Col>
             </Row>
        </Container>
     );
 }
 
 export default TestimonialRow;