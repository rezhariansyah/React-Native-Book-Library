import React, { Component, Fragment } from "react";
import MainNavigator from "./src/config/routes/MainNavigator";
import FooterNavigator from "./src/config/routes/FooterNavigator";

class App extends Component {
  render() {
    return (
      <Fragment>
        <MainNavigator/>
      </Fragment>
    )
  }
}

export default App;
