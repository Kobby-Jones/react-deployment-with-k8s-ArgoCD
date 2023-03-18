import React from 'react';
import { Container } from 'react-bootstrap';
import PropertiesCard from './PropertiesCard';
import properties from './Properties';

function PropertySection() {
    return ( 
        <Container>
            <PropertiesCard type={properties.forSale.singleFamHouse.type} imageUrl = {properties.forSale.condo.image} address = {properties.forSale.singleFamHouse.address}  />
        </Container>
     );
}

export default PropertySection;