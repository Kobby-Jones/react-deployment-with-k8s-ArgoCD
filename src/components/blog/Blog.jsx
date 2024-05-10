import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import Image1 from '../../img/Blog_img_1.jpg'
// import Image2 from '../../img/Blog_img_2.jpg'
// import Image3 from '../../img/Blog_img_3.jpg'
// import Image4 from '../../img/Blog_img_4.jpg'
// import Image5 from '../../img/Blog_img_5.jpg'
 function BlogPage(props) {
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
    return ( 
        
        <>
        <section className='text-center' style={{
            // backgroundImage : `url(${Image2})`,
            backgroundSize : 'cover',
            backgroundAttachment : 'fixed',
            height: '80vh'
        }}>
            <Container>
                <Row style={{
                    paddingTop: '150px'
                }}>
                    <Col style={{
                    }} className='text-center'>
                    <h1 className="animate__animated animate__bounce">
                    Navigating the Real Estate Market: Expert Tips for Buyers and Sellers
                    </h1>
                    <p className='fs-4'>Welcome to our real estate blog, where we provide valuable insights and expert advice to help you navigate the dynamic world of buying and selling properties. Whether you're a first-time homebuyer or a seasoned investor, the real estate market can be both exciting and daunting. In this article, we'll share some essential tips to help you make informed decisions and achieve success in your real estate endeavors.</p>

                    </Col>
                </Row>
            </Container>
        </section>
        </>
     );
 }
 
 export default BlogPage;