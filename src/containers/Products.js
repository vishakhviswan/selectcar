import React from 'react'
import { Card, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import ProductData from '../data/ProductData';
function Products() {
  return (
    <div className="Products-ParentDiv">
      <div className="Products-ChildDiv">
              <Container>
                  <Row>
                  {ProductData.map((obj) => (
                          
          <Card style={{ width: "18rem",margin:"1rem", padding: "1rem" }}>
            <Card.Img
              variant="top"
              src={obj.image}
            />
            <Card.Body>
              <Card.Title>{obj.productTitle}</Card.Title>
              <Card.Text>
                {obj.subTitle}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
                  ))}
                 </Row>     
        </Container>
      </div>
    </div>
  );
}

export default Products