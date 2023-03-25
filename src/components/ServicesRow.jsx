import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ServicesCard from './ServicesCard';
import services from './ServicesTexts';
 
function ServicesRow() {
    return (
      <Row lg="4">
        <Col lg="4">
          <ServicesCard
            title={services.rentAndSell.title}
            text={services.rentAndSell.text}
          />
        </Col>
      </Row>
    );
}

export default ServicesRow;