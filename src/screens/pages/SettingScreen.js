import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuButton from '../../components/MenuButton';

class SettingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text>SettingScreen</Text>
      </View>
    );
  }
}

export default SettingScreen;

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    text : {
        fontSize:30
    }
})
