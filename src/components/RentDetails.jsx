import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import forRent from './RentProperties';
import { useParams } from 'react-router-dom';

function RentDetails() {
    const { id } = useParams();
    
    const item = forRent.find(property => property.id.toString() === id);
    if (!item) {
      console.log("Item not found");
    } 
        return (
          <Container>
            <Row
              style={{
                marginTop: "150px",
              }}
            >
              <Col lg="10">
                <Card>
                  <Card.Img src={item.image} />
                </Card>
              </Col>
            </Row>
          </Container>
        );
    
    
}

export default RentDetails;