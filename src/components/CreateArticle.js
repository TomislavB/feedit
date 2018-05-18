import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col
} from "reactstrap";
import axios from "axios";

import "./CreateArticle.css";

class CreateArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      url: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    axios
      .post("http://localhost:3001/articles", this.state)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    event.preventDefault();
  }

  handleCancel() {
    this.setState({
      title: "",
      author: "",
      url: ""
    });
  }

  render() {
    return (
      <Container className="form">
        <Row>
          <Col sm="12" md={{ size: 4, offset: 4 }}>
            <h1>Add New Article</h1>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="title">Article Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  placeholder="Title"
                />
              </FormGroup>
              <FormGroup>
                <Label for="author">Author</Label>
                <Input
                  type="text"
                  name="author"
                  id="author"
                  value={this.state.author}
                  onChange={this.handleChange}
                  placeholder="Author"
                />
              </FormGroup>
              <FormGroup>
                <Label for="url">URL</Label>
                <Input
                  type="url"
                  name="url"
                  id="url"
                  value={this.state.url}
                  onChange={this.handleChange}
                  placeholder="URL"
                />
              </FormGroup>
              <Container>
                <Row>
                  <Col>
                    <Button color="success" onSubmit={this.handleSubmit}>
                      Submit
                    </Button>
                  </Col>
                  <Col>
                    <Button color="danger" onClick={this.handleCancel}>
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateArticle;
