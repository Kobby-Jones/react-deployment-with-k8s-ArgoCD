import React from 'react';
import { Card } from 'react-bootstrap';


function ServicesCard(props) {
    return (
      <div>
        <Card>
            <Card.Title>
                <div className="text-center">
                <h3>{props.title}</h3>
                </div>
            </Card.Title>
            <Card.Body>
                <div className="text-center">
                        <p>{ props.text}</p>
                </div>
            </Card.Body>
        </Card>
      </div>
    );
}

export default ServicesCard;