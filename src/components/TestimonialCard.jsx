import React from 'react';
import { Card } from 'react-bootstrap';

const TestimonialCard = (params) => {
  return (
    <Card className='text-center p-3 mb-3'>
      <Card.Text>
        {params.text}
      </Card.Text>
      <Card.Title>{params.name}</Card.Title>
    </Card>
  );
    }


export default TestimonialCard;