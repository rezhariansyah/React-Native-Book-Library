import React, { Component, Fragment } from "react";
import MainNavigator from "./src/config/routes/MainNavigator";
import store from "./src/config/redux/Store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default App;
