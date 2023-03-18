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
                <Col lg="4" >
                     <PropertiesCard type={properties.forSale.condo.type} imageUrl = {properties.forSale.condo.image} address = {properties.forSale.condo.address}  />
                </Col>
            </Row>
        </Container>
     );
}

export default PropertySection;