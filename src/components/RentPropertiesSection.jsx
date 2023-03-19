import React from 'react';
import backgroundImage from '../img/background_img_1.jpg'

function RentPropertySection() {
    return (
      <section
        className="bg-info py-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
      ></section>
    );
}

export default RentPropertySection;