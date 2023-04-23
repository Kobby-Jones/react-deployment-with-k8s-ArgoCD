import React from 'react';
import { Container } from 'react-bootstrap';
import WhoWeAre from './WhoWeAre';
import { useEffect } from "react";

function About() {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
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