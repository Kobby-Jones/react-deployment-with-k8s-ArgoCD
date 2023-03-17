import React from 'react';
import {Container, Row} from 'react-bootstrap'
import TestimonialCol from './TestimonialCol';

 function TestimonialRow() {
     return ( 
         <Container>
             <Row>
                 <TestimonialCol />
             </Row>
        </Container>
     );
 }
 
 export default TestimonialRow;