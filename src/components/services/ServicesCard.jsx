import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';



function ServicesCard(params) {
    return (
      <div>
        <Card className='pt-3 mt-3'>
          <Card.Title>
            <div className="icon text-center mb-2">
              <FontAwesomeIcon className='fs-2' icon={params.icon}/>
            </div>
            <div className="text-center">
              <h3>{params.title}</h3>
            </div>
          </Card.Title>
          <Card.Body>
            <div className="text-center">
              <p>{params.text}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
}

export default ServicesCard;