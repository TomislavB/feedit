import React, { Component } from "react";
import ArticleList from "./components/ArticleList";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import router from "./router";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Feedit</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/articles/">Articles</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/add">Add New Article</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {router}
      </div>
    );
  }
}

export default App;
