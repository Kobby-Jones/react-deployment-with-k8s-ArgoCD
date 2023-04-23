import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import forSale from "./saleProperties";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import { useEffect } from "react";


function SalesDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const item = forSale.find((property) => property.id.toString() === id);
  if (!item) {
    console.log("Item not found");
  }
  return (
    <>
      <Container className="text-center">
        <Row
          style={{
            marginTop: "150px",
          }}
        >
          <Col lg="10" className="ms-auto me-auto">
            <Card className="text-center mb-5 pb-3">
              <Card.Img src={item.image} />
              <Card.Title>
                <h1>{item.type}</h1>
              </Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              <Link to="/">
                <Button variant="primary">Back To Home</Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default SalesDetails;
