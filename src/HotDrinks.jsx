import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button} from 'react-bootstrap';  
import image from "./Images/coffee.jpg"; 


function HotDrinks() {  
  return (  
    <div className="Card">  
   <Container className='card-container'>  
  <Col md="5">  
  <Card>  
  <Card.Img variant="top" src={image} className="coffeeImg" />  
  <Card.Body>  
    <Card.Title>Menu</Card.Title>  
    <Card.Text>  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
    </Card.Text>  
    <Button variant="primary">Select</Button>  
    <Button variant="secondary">Check Out</Button>  
    
  </Card.Body>  
</Card>  
    </Col>  
</Container>  
    </div>  
  );  
}  
export default HotDrinks;  