import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Icon } from "native-base";

class MenuButton extends Component {
  render() {
    return (
      <Icon
        name="md-menu"
        color="#000000"
        size={32}
        style={styles.menuIcon}
        onPress={() => this.props.navigation.toggleDrawer()}
      />
    );
  }
}

export default MenuButton;

const styles = StyleSheet.create({
  menuIcon: {
    zIndex: 9,
    position: "absolute",
    top: 40,
    left: 20
  }
});
