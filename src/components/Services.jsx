import React from 'react';
import { Container } from 'react-bootstrap';
import ServicesRow from './ServicesRow';

function Services() {
    return ( 
        <Container className='py-4'>
            <div className="services-head text-center py-3">
                <h2 className="text-uppercae">Our services</h2>
            </div>
            <div className="line">
                <hr
                    style={
                        {
                            width:'100%'
                        }
                }
                />
            </div>
            <ServicesRow />    
        </Container>
     );
}

export default Services;