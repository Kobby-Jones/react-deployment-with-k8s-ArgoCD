import React from 'react';
import { Card } from 'react-bootstrap';

const TestimonialCard = (params) => {
    return (
      <Card className='text-center'>
        <Card.Text>
          "I had a great experience working with the KJ Real Estate Agency team.
          They were very knowledgeable and helpful throughout the entire
          process. I would definitely recommend them to anyone looking to buy or
          sell a property."
            </Card.Text>
            <Card.Title>{params.name}</Card.Title>
      </Card>
    );
}

export default TestimonialCard;