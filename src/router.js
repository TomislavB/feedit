import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import ArticleList from "./components/ArticleList";
import CreateArticle from "./components/CreateArticle";
import Home from "./components/Home";

export default (
  <Switch>
    <Route component={Home} path="/" exact />
    <Route component={ArticleList} path="/articles" />
    <Route component={CreateArticle} path="/add" />
  </Switch>
);
