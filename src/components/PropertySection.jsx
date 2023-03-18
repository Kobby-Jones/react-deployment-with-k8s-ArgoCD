import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropertiesCard from "./PropertiesCard";
import forSale from "./Properties";
import backgroundImage from "../img/image_5.jpg";

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
              type={forSale.singleFamHouse.type}
              imageUrl={forSale.singleFamHouse.image}
              address={forSale.singleFamHouse.address}
              bedRooms={forSale.singleFamHouse.bedRooms}
              bathRooms={forSale.singleFamHouse.bathRooms}
            />
          </Col>
          <Col lg="4">
            <PropertiesCard
              type={forSale.condo.type}
              imageUrl={forSale.condo.image}
              address={forSale.condo.address}
              bedRooms={forSale.condo.bedRooms}
              bathRooms={forSale.condo.bathRooms}
            />
          </Col>
          <Col lg="4">
            <PropertiesCard
              type={forSale.townHouse.type}
              imageUrl={forSale.townHouse.image}
              address={forSale.townHouse.address}
              bedRooms={forSale.townHouse.bedRooms}
              bathRooms={forSale.townHouse.bathRooms}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PropertySection;
