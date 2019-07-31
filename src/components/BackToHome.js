import React, { Component, Fragment } from "react";
import { StyleSheet, Image, Text, Button } from "react-native";
import { Icon, View } from "native-base";

class BackToHome extends Component {
  render() {
    return (
        <Icon
        name="arrow-back"
        color="#000000"
        size={32}
        style={styles.menuIcon}
        onPress={() => this.props.navigation.navigate('Home')}
      />
    );
  }
}

export default BackToHome;

const styles = StyleSheet.create({
  menuIcon: {
    zIndex: 9,
    position: "absolute",
    top: 20,
    left: 20,
    width: 20,
    height: 30
  },
  textIcon: {
    zIndex: 9,
    position: "absolute",
    top: 20,
    left: 45,
    height: 20
  }
});
