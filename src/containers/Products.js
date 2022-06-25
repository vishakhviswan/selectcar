import React from 'react'
import { Card, Container, ListGroup, ListGroupItem, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProductData from '../data/ProductData';
function Products() {
  const navigate = useNavigate()
  return (
    <div className="Products-ParentDiv">
      <div className="Products-ChildDiv">
        <Container>
          <div className="title">
            <h3>Top Cars in India</h3>
            <p>
              We have arrranged the best and futuristic Cars in India. Find your
              right car and book your test drive here.
            </p>
            <p>
              A car is every person's dream.In our country it is very difficult
              to find a suitable car among so many cars but we will make it easy
              for you here.
            </p>
          </div>
          <Row>
            {ProductData.map((obj) => (
              <Card
                style={{ width: "18rem", margin: "1rem", padding: "0.5rem" }}
              >
                <Card.Img variant="top" src={obj.image} />
                <Card.Body>
                  <Card.Title>{obj.productTitle}</Card.Title>
                  <Card.Text>{obj.subTitle}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    {obj.price
                      ? `Ex Showroom Price: ₹ ${obj.price}`
                      : "Price update soon.."}
                  </ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                </ListGroup>
                <Button className="mb-1">Get On Road Price</Button>
                <Button className="mb-1" onClick={() => {
                  navigate("/testdrive")
                }}>Test Drive</Button>
                <Button>Book Now</Button>
              </Card>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Products