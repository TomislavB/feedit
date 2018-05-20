import React from "react";

import moment from "moment";

import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import "./Article.css";

const Article = props => {
  const { title, author, date, url, votes } = props;
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <a href={url}>
                <CardTitle className="naslov">{title}</CardTitle>
              </a>
              <CardSubtitle className="autor">Author: {author}</CardSubtitle>
            </CardBody>
            <CardBody>
              <CardText className="glas">Votes: {votes}</CardText>
              <CardText>
                {moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")}
              </CardText>
              <Button color="danger" href="#">
                Delete
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Article;
