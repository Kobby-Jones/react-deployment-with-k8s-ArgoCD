import React from 'react';
import { Container } from 'react-bootstrap';
import WhoWeAre from './WhoWeAre';

function About() {
    return (
      <section className='mb-3' 
      >
        <Container>
           <WhoWeAre />
        </Container>
      </section>
    );
}

export default About;