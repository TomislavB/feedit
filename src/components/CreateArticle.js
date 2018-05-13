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
      author: "Unknown",
      url: "http://www.index.hr"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("key pressed: ", event.target.value);
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    console.log("Paket je spreman na slanje: ", this.state);
    axios
      .post("http://localhost:3001/articles", this.state)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    // axios.post('/user', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    event.preventDefault();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
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
                />
              </FormGroup>
              {/* <FormGroup>
                <Label for="url">URL</Label>
                <Input
                  type="url"
                  name="url"
                  id="url"
                  value={this.state.url}
                  onChange={this.handleChange}
                />
              </FormGroup> */}
              <Button onSubmit={this.handleSubmit}>Submit</Button>
              <Button>Cancel</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateArticle;
