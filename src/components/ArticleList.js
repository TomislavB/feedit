import React, { Component } from "react";
import axios from "axios";
import "./ArticleList.css";

class ArticleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    console.log("Komponenta je montirana!");
    axios
      .get(`https://swapi.co/api/people`)
      .then(res => {
        console.log(res);
        console.log("test");
        //   this.setState({ characters: res.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>StarWars Characters</h1>
        {this.state.characters.map(character => (
          <div className="card">
            <h6>
              {character.name} - visina: {character.height} cm
            </h6>
          </div>
        ))}
      </div>
    );
  }
}

export default ArticleList;
