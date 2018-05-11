import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import ArticleList from "./components/ArticleList";
import CreateArticle from "./components/CreateArticle";

export default (
  <Switch>
    {/* <Route component={App} path="/" exact /> */}
    <Route component={ArticleList} path="/articles" />
    <Route component={CreateArticle} path="/articles/new" />
  </Switch>
);
