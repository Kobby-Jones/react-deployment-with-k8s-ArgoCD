import { faHouse, faHouseLock } from '@fortawesome/free-solid-svg-icons';
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
            icon = {faHouse}
          />
        </Col>
        <Col lg="4">
          <ServicesCard
            title={services.propertyManagement.title}
            text={services.propertyManagement.text}
            icon= {faHouseLock}
          />
        </Col>
        <Col lg="4">
          <ServicesCard
            title={services.propertyListing.title}
            text={services.propertyListing.text}
          />
        </Col>
      </Row>
    );
}

export default ServicesRow;