import React, { Component } from "react";
import ArticleList from "./components/ArticleList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Feedit</h1>
        </header>
        <p className="App-intro">Ovdje će biti popis članaka.</p>
        <ArticleList />
      </div>
    );
  }
}

export default App;
