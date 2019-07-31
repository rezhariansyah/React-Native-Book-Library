import React, { Component } from "react";
import {
  Platform,
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

class MenuDrawer extends Component {
  navLink(nav, text) {
    return (
      <TouchableOpacity
        style={{ height: 50 }}
        onPress={() => this.props.navigation.navigate(nav)}
      >
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topLink}>
          <View style={styles.profile}>
            <View style={styles.imageView}>
              <Image
                style={{ width: 150, height: 150, marginBottom: 20 }}
                source={require("../assets/img/man.png")}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "white" }}>Your Name</Text>
                <Text style={{ color: "white" }}>ID Card</Text>
                <Text style={{ color: "white" }}>Email</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bottomLink}>
          {this.navLink("Settings", "Settings")}
          {this.navLink("Login", "Login")}
        </View>
      </View>
    );
  }
}

export default MenuDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray"
  },
  link: {
    flex: 1,
    fontSize: 20,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: "left"
  },
  topLink: {
    height: 300,
    backgroundColor: "#0F88F1"
  },
  bottomLink: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 400,
    color: "red"
  },
  profile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 25,
    borderBottomWidth: 1,
    borderColor: "grey"
  },
  imageView: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
});
