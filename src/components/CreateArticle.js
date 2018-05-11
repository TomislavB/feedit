import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";

import "./CreateArticle.css";

class CreateArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    };
  }
  render() {
    return (
      <div>
        <h1>Add New Article</h1>
        <Form>
          <FormGroup>
            <Label for="title">Article Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Article Title"
            />
          </FormGroup>
          <FormGroup>
            <Label for="author">Author</Label>
            <Input
              type="text"
              name="author"
              id="author"
              placeholder="Author Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="url">URL</Label>
            <Input type="url" name="url" id="url" placeholder="URL" />
          </FormGroup>
          <Button>Submit</Button>
          <Button>Cancel</Button>
        </Form>
      </div>
    );
  }
}

export default CreateArticle;
