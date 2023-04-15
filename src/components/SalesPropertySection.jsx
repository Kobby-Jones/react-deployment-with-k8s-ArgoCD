import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PropertiesCard from "./PropertiesCard";
import forSale from "./saleProperties";
import backgroundImage from "../img/image_5.jpg";


function SalesPropertySection() {
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
          marginTop: "100px",
        }}
      >
        <h2 className="mb-3 text-light fw-bolder">Properties For Sale</h2>
      </div>
      <Container>
        {/* <Row>
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
          <Col lg="4">
            <PropertiesCard
              type={forSale.apartment.type}
              imageUrl={forSale.apartment.image}
              address={forSale.apartment.address}
              bedRooms={forSale.apartment.bedRooms}
              bathRooms={forSale.apartment.bathRooms}
            />
          </Col>
          <Col lg="4">
            <PropertiesCard
              type={forSale.house.type}
              imageUrl={forSale.house.image}
              address={forSale.house.address}
              bedRooms={forSale.house.bedRooms}
              bathRooms={forSale.house.bathRooms}
            />
          </Col>
          <Col lg="4">
            <PropertiesCard
              type={forSale.condo2.type}
              imageUrl={forSale.condo2.image}
              address={forSale.condo2.address}
              bedRooms={forSale.condo2.bedRooms}
              bathRooms={forSale.condo2.bathRooms}
            />
          </Col>
        </Row> */}
        <Row>
          {forSale.map((property, index) =>
            Object.keys(property).map((propType, i) => (
              <Col lg="4" className="mt-3" key={index - i}>
                <PropertiesCard
                  type={property[propType].type}
                  imageUrl={property[propType].image}
                  address={property[propType].address}
                  bedRooms={property[propType].bedRooms}
                  bathRooms={property[propType].bathRooms}
                  id={property[propType].id}
                />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  );
}

export default SalesPropertySection;
