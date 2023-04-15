import { Card, Button } from 'react-bootstrap';



function PropertiesCard(props) {

 
  
    return (
      <Card className="text-center p-3">
        <Card.Img variant="top" alt="House Image" src={props.imageUrl} />
        <Card.Body>
          <Card.Title>{props.type}</Card.Title>
          <Card.Text>{props.address}</Card.Text>
          <Card.Text>
            {props.bedRooms} Bedrooms | {props.bathRooms} Bathrooms{" "}
          </Card.Text>
          <Button variant="primary">
              View Property
          </Button>
        </Card.Body>
      </Card>
    );
}
export default PropertiesCard;
