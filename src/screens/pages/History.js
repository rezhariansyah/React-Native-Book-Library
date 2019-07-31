import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuButton from '../../components/MenuButton';

class HistoryScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text>HistoryScreen</Text>
      </View>
    );
  }
}

export default HistoryScreen;

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
