import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropertiesCard from './PropertiesCard';
import properties from './Properties';

function PropertySection() {
    return (
      <section className="bg-info py-5">
        <div className="text-center">
          <h2 className="mb-3">Properties For Sale</h2>
        </div>
        <Container>
          <Row>
            <Col lg="4">
              <PropertiesCard
                type={properties.forSale.singleFamHouse.type}
                imageUrl={properties.forSale.singleFamHouse.image}
                address={properties.forSale.singleFamHouse.address}
                bedRooms={properties.forSale.singleFamHouse.bedRooms}
                bathRooms={properties.forSale.singleFamHouse.bathRooms}
              />
            </Col>
            <Col lg="4">
              <PropertiesCard
                type={properties.forSale.condo.type}
                imageUrl={properties.forSale.condo.image}
                address={properties.forSale.condo.address}
                bedRooms={properties.forSale.condo.bedRooms}
                bathRooms={properties.forSale.condo.bathRooms}
              />
            </Col>
            <Col lg="4">
              <PropertiesCard
                type={properties.forSale.townHouse.type}
                imageUrl={properties.forSale.townHouse.image}
                address={properties.forSale.townHouse.address}
                bedRooms={properties.forSale.townHouse.bedRooms}
                bathRooms={properties.forSale.townHouse.bathRooms}
              />
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default PropertySection;