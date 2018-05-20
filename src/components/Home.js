import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Container className="form">
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Jumbotron>
              <h1 className="display-3">Welcome to Feedit</h1>
              <p className="lead">Simple Web App for posting your Articles</p>
              <hr className="my-2" />
              <p>
                Click 'Articles' to view Article List or 'Add New Article' to
                Add Article
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
