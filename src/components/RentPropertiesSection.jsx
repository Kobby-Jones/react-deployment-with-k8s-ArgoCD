import React from 'react';
import backgroundImage from '../img/background_img_1.jpg'

function RentPropertySection() {
    return (
      <section
        className="bg-info py-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: "fixed",
          backgroundSize:'cover'
        }}
      >
        <div
          className="text-center py-5"
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <h2 className="mb-3 text-light fw-bolder">Properties For Rent</h2>
        </div>
      </section>
    );
}

export default RentPropertySection;