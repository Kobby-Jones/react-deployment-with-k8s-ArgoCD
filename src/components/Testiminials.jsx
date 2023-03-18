import React from 'react';
import TestimonialRow from './TestimonialRow';
import backgroundImage from '../img/image_3.jpg'

 
const Testimonials = () => {
    return (
      <div
        className="p-4"
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment:'fixed'
        }}
      >
        <h2 className="text-center fw-bolder bg-light mb-3">Customer Testimonials</h2>
        <TestimonialRow />
      </div>
    );
}
export default Testimonials;