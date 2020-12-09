import React from "react";
import "../styles/App.css";
import BusinessList from "./BusinessList";
import Yelp from "../util/Yelp";
import StatusBar from "./statusBar/StatusBar";
require("dotenv").config();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.setState({ businesses: businesses });
      console.log(term, location, sortBy);
      console.log(businesses);
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Where Should We Eat?</h1>
        <StatusBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
