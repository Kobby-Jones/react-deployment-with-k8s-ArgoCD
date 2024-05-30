import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import agents from './AgentDetails';
import backgroundImage from '../../img/background_img_1.jpg'
import Footer from '../Footer';

function AgentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return ( 
    <>
    <section  className="bg-info py-5"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
    }}> 
    <div
        className="text-center py-5"
        style={{
          backgroundColor: "rgba(0,0,0,0.8)",
          marginTop: "100px",
        }}
      >
        <h2 className="mb-3 text-light fw-bolder">Meet Our Agents</h2>
      </div>
    <Container className='text-center'>
      <Row>
          {agents.map((agent) => (
            <Col lg = "4" className='pt-3' key={agent.id}>
                <Card>
                    <Card.Img className='circle-img'
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