import React from 'react';
import { Card } from 'react-bootstrap';


function ServicesCard(params) {
    return (
      <div>
        <Card>
          <Card.Title>
            <div className="icon text-center">
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