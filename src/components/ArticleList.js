import React, { Component } from "react";
import axios from "axios";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./ArticleList.css";

class ArticleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    console.log("Komponenta je montirana!");
    axios
      .get(`http://localhost:3001/articles`)
      .then(res => {
        console.log(res.data);
        this.setState({ articles: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h1>Articles</h1>
            {this.state.articles.map(article => (
              <div className="card">
                <a href={article.url}>
                  <h1>{article.title}</h1>
                </a>
                <h3>Autor: {article.author}</h3>
                <p>{article.text}</p>
                <p>Votes: {article.votes}</p>
                <p>Date: {article.date}</p>
              </div>
            ))}
            <Link to="/add">
              <Button color="primary">Add New Article</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ArticleList;
