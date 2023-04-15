import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function PropertyDetails({image, type}) {
  
    return ( 
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img src={image} alt='image' />
                            <Card.Title>{type}</Card.Title>
                            <Card.Text>{}</Card.Text>
                            <Button variant='primary'>Back to Home</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
     );
}

export default PropertyDetails;