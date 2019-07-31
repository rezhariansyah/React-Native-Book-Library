import React, { Component, Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon
} from "native-base";
import MenuButton from "../../components/MenuButton";
import FooterNavigator from '../../config/routes/FooterNavigator';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <MenuButton navigation={this.props.navigation} />
          <Text>Home</Text>
        </View>
      </Fragment>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 30
  },
  inputIcon: {
    width: 25,
    height: 25,
    justifyContent: "center"
  }
});
