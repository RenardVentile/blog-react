import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
  Badge,
} from "reactstrap";

class GraphismPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg="3" sm="6" md="4">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://via.placeholder.com/150"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle className="h3">Titre</CardTitle>
                <small className="text-muted">Date</small>
                <CardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </CardText>
                <Badge>Tag</Badge>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6" md="4">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://via.placeholder.com/150"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6" md="4">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://via.placeholder.com/150"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6" md="4">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://via.placeholder.com/150"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" sm="6" md="4">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://via.placeholder.com/150"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </Container>
           
    );
  }
}

export default GraphismPage;
