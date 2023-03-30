import React from "react";
import forRent from "./RentProperties";
import { Container, Row, Col } from "react-bootstrap";
import backgroundImage from "../img/background_img_1.jpg";
import PropertiesCard from "./PropertiesCard";

function RentPropertySection() {
  return (
    <section
      className="bg-info py-5"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div
        className="text-center py-5"
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
      >
        <h2 className="mb-3 text-light fw-bolder">Properties For Rent</h2>
      </div>
      <Container>
        <Row>
          {forRent.map((property, index) =>
            Object.keys(property).map((propType, i) => (
              <Col lg="4" className="mt-3" key={index-i}>
                <PropertiesCard
                  type={property[propType].type}
                  imageUrl={property[propType].image}
                  address={property[propType].address}
                  bedRooms={property[propType].bedRooms}
                  bathRooms={property[propType].bathRooms}
                />
              </Col>
            ))
          )}
        </Row>
        
      </Container>
    </section>
  );
}

export default RentPropertySection;
