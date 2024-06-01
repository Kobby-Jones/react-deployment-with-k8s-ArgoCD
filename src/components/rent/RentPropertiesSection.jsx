import React from "react";
import forRent from "./RentProperties";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import backgroundImage from "../../img/background_img_1.jpg";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
function RentPropertySection() {
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
        <h2 className="mb-3 text-light fw-bolder">Properties For Rent</h2>
      </div>
      <Container>
        <Row>
          {forRent.map((property) => (
            <Col lg="4" className="mt-3" key={property.id}>
                <Card className="text-center p-3" data-aos="zoom-in-right">
                <Card.Img
                  variant="top"
                  alt="House Image"
                  src={property.image}
                />
                <Card.Body>
                  <Card.Title>{property.type}</Card.Title>
                  <Card.Text>{property.address}</Card.Text>
                  <Card.Text>
                    {property.bedRooms} Bedrooms | {property.bathRooms} Bathrooms{" "}
                  </Card.Text>
                  <Link to={`rent-details/${property.id}`}>
                    <Button variant="primary">View Property</Button>
                  </Link>
                </Card.Body>
              </Card>
                
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}


export default RentPropertySection;
