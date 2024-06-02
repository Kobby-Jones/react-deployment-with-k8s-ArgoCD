import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import forSale from '.././sales/saleProperties';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import forRent from '../rent/RentProperties';
import Footer from '../Footer';

function AgentListing() {
    const { agent_id } = useParams();
    const agent_rents = forRent.filter((property)=> property.id.toString() ===agent_id )
    const agent_sales = forSale.filter((property) => property.agent_id.toString() === agent_id);
    const agent_properties = [...agent_rents, ...agent_sales]
    console.log(agent_properties)
    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <section className="bg-info mt-5">
            <Container className="py-5">
                <Row className="py-5">
                    {agent_properties.map((property) => (
                        <Col lg="4" className="mt-3" key={property.id}>
                            <Card className="text-center p-3">
                                <Card.Img variant="top" alt="House Image" height= "300px" src={property.image} />
                                <Card.Body>
                                    <Card.Title>{property.type}</Card.Title>
                                    <Card.Text>{property.address}</Card.Text>
                                    <Card.Text>
                                        {property.bedRooms} Bedrooms | {property.bathRooms} Bathrooms
                                    </Card.Text>
                                    <Link to={`/sales-details/${property.id}`}>
                                        <Button>View Property</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
        <Footer />
        </>
    );
}

export default AgentListing;
