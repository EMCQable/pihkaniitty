import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, Navbar } from "react-bootstrap";
import RouteNavItem from "./components/RouteNavItem";
import "./App.css";
import Routes from "./Routes";

class App extends Component {

constructor(props) {
  super(props);

  this.state = {
    isAuthenticated: false
  };
}

userHasAuthenticated = authenticated => {
  this.setState({ isAuthenticated: authenticated });
}

handleLogout = event => {
  this.userHasAuthenticated(false);
}



render() {

const childProps = {
  isAuthenticated: this.state.isAuthenticated,
  userHasAuthenticated: this.userHasAuthenticated
};

return (
    <div className="App container">
      <Routes childProps={childProps} />
    </div>
  );
}

}

export default App;


