import React, { Component } from "react";
import axios from "axios";
// import toast from "toast";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Article from "./Article";

import "./ArticleList.css";

class ArticleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  handleDelete = _id => {
    axios.delete("http://localhost:3000/${_id}").then(function(response) {
      const { articles } = this.state;
      const updatedList = articles.filter(
        ({ _id: articleId }) => _id !== articleId
      );
      this.setState({ articles: updatedList });
    });
    // .catch(() => toast.error("Failed to delete article."));
  };

  componentDidMount() {
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
              <Article
                title={article.title}
                author={article.author}
                date={article.date}
                url={article.url}
                votes={article.votes}
              />
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
