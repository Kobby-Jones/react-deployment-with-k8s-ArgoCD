import React from 'react';
function WhoWeAre() {
    return (
      <div style={{
        backgroundColor: 'rgba(0,0,0,0.7)'
      }}>
        <div className="services-head text-center">
          <h3 className="text-uppercase text-light">Who we are</h3>
        </div>
        <div className="line">
          <hr className='text-light'
            style={{
              width: "100%",
            }}
          />
        </div>
        <div className="text-center">
          <p className='text-light'>
            At KJ Real Estate Agency Limitedd, we're passionate about creating
            exceptional living spaces that meet the needs and desires of our
            clients. With years of experience in the industry, we're committed
            to delivering high-quality, sustainable developments that not only
            enhance the value of the community, but also improve the quality of
            life for its residents. Our team of experts works closely with
            architects, designers, and builders to ensure that each project is
            executed to perfection, from the initial concept to the final
            touches. At KJ, we take pride in our attention to detail,
            dedication to excellence, and unwavering commitment to client
            satisfaction. Contact us today to learn more about our services and
            how we can help you realize your vision for your dream home.
          </p>
        </div>
      </div>
    );
}

export default WhoWeAre;