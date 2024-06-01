import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import agents from './AgentDetails';
import backgroundImage from '../../img/background_img_1.jpg'
import Footer from '../Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AgentPage() {
  const [data, getData] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0);
    try{
      const response = axios.get('https://randomuser.me/api/?results=15')
      getData(response.results)
    }catch(error){
      console.log(error)
    }
  }, []);
  
    console.log(data)
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
                    <Link to={''}>
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
