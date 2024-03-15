import React from 'react';
import TestimonialRow from './TestimonialRow';
import backgroundImage from "../../img/image_3.jpg";

 
const Testimonials = () => {
    return (
      <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="text-center py-5"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <h2 className="fw-bolder text-light mb-3">Customer Testimonials</h2>
        </div>
        <div className="p-4">
          <TestimonialRow />
        </div>
      </section>
    );
}
export default Testimonials;