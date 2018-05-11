import React, { Component } from "react";
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
      </div>
    );
  }
}

export default CreateArticle;
