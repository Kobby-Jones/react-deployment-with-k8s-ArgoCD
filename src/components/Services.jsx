import React from 'react';
import TestimonialCard from './TestimonialCard';
import ServicesCard from './ServicesCard';
import services from './ServicesTexts';

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
            <ServicesCard title={services.rentAndSell.title} text={ services.rentAndSell.text} />
            <TestimonialCard />
        </div>
     );
}

export default Services;