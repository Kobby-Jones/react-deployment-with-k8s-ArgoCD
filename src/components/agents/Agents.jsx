import React, { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import agents from './AgentDetails';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function AgentPage() {

  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);
  return ( 
    <>
    <section  className="py-5"> 
    <div
        className="text-center py-5"
        style={{
            marginTop: "100px",
        }}
      >
        <h2 className="mb-3 fw-bolder">Meet Our Agents</h2>
        <p className=''>At <strong>Dreamscape</strong>, our team of professional agents is here to guide you through every step of your real estate journey. Whether you're buying your first home, selling a property, or looking for an investment opportunity, our experienced agents are committed to providing exceptional service and expert advice. Get to know our team below and find the perfect agent to help you achieve your real estate goals.</p>
      </div>
    <Container className='text-center'>
      <Row>
          {agents.map((agent) => (
            <Col lg = "4" className='pt-3' key={agent.id}>
                <Card className='pb-4'>
                    <Card.Img className='rounded'
                    src={agent.photo}
                    variant='top'
                    alt = {agent.name}
                    />
                    <Card.Body>
                      <Card.Title>
                        {agent.name}
                      </Card.Title>
                      <Card.Title>
                        {agent.email}
                      </Card.Title>
                      <Card.Title>
                        {agent.phone}
                      </Card.Title>
                      <Card.Text>
                        {agent.bio}
                      </Card.Text>
                    </Card.Body>
                    <Link to={`agents-listing/${agent.id}`}>
                    <Button>View Listings</Button>
                    </Link>
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

export default AgentPage;
