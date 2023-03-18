import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropertiesCard from './PropertiesCard';
import properties from './Properties';

function PropertySection() {
    return ( 
        <Container>
            <Row>
                <Col lg="4" >
                     <PropertiesCard type={properties.forSale.singleFamHouse.type} imageUrl = {properties.forSale.singleFamHouse.image} address = {properties.forSale.singleFamHouse.address}  />
                </Col>
            </Row>
        </Container>
     );
}

export default PropertySection;