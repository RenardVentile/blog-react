import React, { Component } from "react";
import { Container, Row, Col, Badge } from "reactstrap";
class TemplatePost extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>titre</h2>
          </Col>
        </Row>
        <Row  /*style={{background:'red'}}*/>
          <Col>
            <small className="text-muted">Date</small>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <img src="https://via.placeholder.com/450" className="w-100"></img>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <p>Enim consequat commodo sint aute irure velit eu sit eu velit veniam velit duis. Anim est est commodo mollit consectetur velit excepteur occaecat nulla fugiat id dolore veniam sint. Culpa anim reprehenderit dolore sit aliqua sunt est incididunt ea pariatur sint adipisicing culpa.</p>
          </Col>
        </Row>
        <Row style={{background:'red'}}>
          <Col lg="6" md="6" sm="12">
            lien1
          </Col>
          <Col lg="6" md="6" sm="12">
            lien2
          </Col>
          <Col lg="6" md="6" sm="12">
            lien3
          </Col>
        </Row>
        <Row>
          <Col>
            <Badge color="primary">tag1</Badge>
            <Badge>tag2</Badge>
            <Badge>tag3</Badge>
            <Badge>tag4</Badge>
            <Badge>tag5</Badge>
            <Badge>tag6</Badge>
            <Badge>tag7</Badge>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TemplatePost;
