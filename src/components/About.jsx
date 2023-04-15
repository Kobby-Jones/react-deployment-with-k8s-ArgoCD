import React from 'react';
import { Container } from 'react-bootstrap';
import WhoWeAre from './WhoWeAre';

function About() {
    return (
      <section className='mb-3' 
      >
        <Container style={{
          paddingTop: '150px',
        }}>
           <WhoWeAre />
        </Container>
      </section>
    );
}

export default About;