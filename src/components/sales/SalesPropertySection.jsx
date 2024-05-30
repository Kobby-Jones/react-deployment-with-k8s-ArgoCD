import React from "react";
import forSale from './saleProperties'
import { Container, Row, Col } from "react-bootstrap";
import backgroundImage from "../../img/image_5.jpg";
import { useEffect } from "react";
import PropertiesCard from "../PropertiesCard";

function SalesPropertySection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          marginTop: "100px",
        }}
      >
        <h2 className="mb-3 text-light fw-bolder">Properties For Sale</h2>
      </div>
      <Container>
        <Row>
          {forSale.map((property) => (
            <Col lg="4" className="mt-3" key={property.id}>
              <PropertiesCard type={property.type} imageUrl={property.image} bathRooms={property.bathRooms} bedRooms={property.bedRooms} address={property.address}/>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default SalesPropertySection;
