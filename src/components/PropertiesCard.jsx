import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';





function PropertiesCard({type, imageUrl, bathRooms, bedRooms, address, propertyId}) {

    return (
      <Card className="text-center p-3">
        <Card.Img variant="top" alt="House Image" src={imageUrl} />
        <Card.Body>
          <Card.Title>{type}</Card.Title>
          <Card.Text>{address}</Card.Text>
          <Card.Text>
            {bedRooms} Bedrooms | {bathRooms} Bathrooms{" "}
          </Card.Text>
          <Link to="details">
            <Button variant="primary">View Property</Button>
          </Link>
        </Card.Body>
      </Card>
    );
}
export default PropertiesCard;
