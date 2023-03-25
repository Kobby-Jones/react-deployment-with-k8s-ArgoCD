import React from 'react';
import ServicesRow from './ServicesRow';

function Services() {
    return ( 
        <div>
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
        </div>
     );
}

export default Services;