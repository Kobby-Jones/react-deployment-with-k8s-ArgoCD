import React from 'react';
import { Card, CardImg } from 'react-bootstrap';

function AgentCard(props) {
    return ( 
        <Card className='text-center p-3'>
            <CardImg alt='Agent Picture' variant='top' src={props.image} />
            <Card.Title >
                {props.firstName} {props.lastName}
            </Card.Title>
        </Card>
     );
}

export default AgentCard;