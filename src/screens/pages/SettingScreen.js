import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import MenuButton from "../../components/MenuButton";
import {
  Form,
  Label,
  Item,
  Input,
  Container,
  Header,
  Content,
  Button
} from "native-base";

class SettingScreen extends Component {
  render() {
    return (
      <Container>
      <MenuButton navigation={this.props.navigation} />
        <Content>
          <View style={styles.container}>
            <Image
              style={styles.profileImage}
              source={require("../../assets/img/man.png")}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text style={{ fontSize: 17 }}>Edit Profile</Text>
          </View>
          <Form style={styles.formInput}>
            <Item inlineLabel>
              <Label>Full Name :</Label>
              <Input />
            </Item>
            <Item inlineLabel>
              <Label>Email :</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>ID Card :</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>New Password :</Label>
              <Input />
            </Item>
          </Form>
          <View style={styles.save}>
            <Button style={styles.buttonSave} rounded danger>
              <Text>Cancel</Text>
            </Button>
            <Button style={styles.buttonSave} rounded info onPress={() => alert('baba')}>
              <Text>Save</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 45
  },
  profileImage: {
    width: 180,
    height: 180
  },
  text: {
    fontSize: 30
  },
  formInput: {
    marginHorizontal: 10
  },
  buttonSave: {
    width: 80,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    margin:8,
    marginTop:0
  },
  save: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    flexDirection:'row',
    marginHorizontal:100
  }
});
