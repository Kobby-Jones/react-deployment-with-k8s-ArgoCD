import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropertiesCard from './PropertiesCard';
import properties from './Properties';
import backgroundImage from '../img/image_5.jpg'

function PropertySection() {
    return (
      <section
        className="bg-info py-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="text-center py-5"
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <h2 className="mb-3 text-light fw-bolder">Properties For Sale</h2>
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