import React from 'react';
import { Col } from 'react-bootstrap';
import TestimonialCard from './TestimonialCard';

function TestimonialCol() {
    const customers = {
  Kobby: {
    name: "Kobby Jones",
    testimony:
      "I had a great experience working with the KJ Real Estate Agency team. They were very knowledgeable and helpful throughout the entire process. I would definitely recommend them to anyone looking to buy or sell a property",
  },
  Tony: {
    name: "Tony Pablo",
    testimony:
      "The KJ Real Estate Agency team made selling my home a breeze. They were professional, responsive, and always had my best interests in mind. I would highly recommend their services to anyone in the market for a new home or looking to sell their existing property.",
  },
  Mike: {
    name: "Mike Johnson",
    testimony:
      "I cannot speak highly enough of the KJ Real Estate Agency team. They were incredibly helpful and responsive, and went above and beyond to help us find the perfect home for our family. I would definitely work with them again in the future.",
  },
};
    
    return ( 
        
        <Col xs="4">
            <TestimonialCard text = {customers.Tony.testimony} name ={customers.Tony.name} />
        </Col>
     );
}

export default TestimonialCol;