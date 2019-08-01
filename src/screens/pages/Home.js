import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
import MenuButton from "../../components/MenuButton";
import { connect } from "react-redux";
import { getAllBooks } from "../../config/redux/Actions/Book";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: []
    };
  }

  async componentDidMount() {
    await this.props.dispatch(getAllBooks());
    const book = await this.props.Book;
    this.setState({ book });
  }

  render() {
    console.log("baba", this.state.book);
    return (
      <Fragment>
        <View style={styles.header}>
          <MenuButton navigation={this.props.navigation} />
        </View>
        <View style={styles.searchBar}>
          <TextInput
            style={{ marginHorizontal: 20 }}
            placeholder="Search Book..."
          />
        </View>
        <ScrollView>
          <View style={styles.FlatList}>
            <FlatList
              data={this.state.book.bookList}
              numColumns={2}
              onEndReachedThreshold={0.2}
              keyExtractor={item => item.id_book}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      this.props.navigation.navigate("Settings", item);
                    }}
                  >
                    <View style={styles.item} key={index}>
                      {item.status == 0 ? (
                        <Text numberOfLines={1} style={styles.Borrowed}>
                          Borrowed
                        </Text>
                      ) : (
                        <Text numberOfLines={1} style={styles.available}>
                          Available
                        </Text>
                      )}
                      <Image
                        style={styles.image}
                        source={{ uri: `${item.img}` }}
                      />
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    Book: state.Book
  };
};

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 60
  },
  text: {
    fontSize: 30
  },
  Borrowed: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
    backgroundColor: "grey",
    borderRadius: 10,
    paddingTop: 2,
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    width: 60,
    height: 20,
    marginTop: 192
  },
  available: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
    backgroundColor: "#1F85DE",
    borderRadius: 10,
    paddingTop: 2,
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    width: 60,
    height: 20,
    marginTop: 192
  },
  image: {
    width: 145,
    height: 215,
    borderRadius: 10
  },
  searchBar: {
    zIndex: 1,
    backgroundColor: "#fff",
    borderBottomColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
    marginTop: 15,
    alignSelf: "center",
    marginRight: 0,
    height: 38,
    width: 307,
    position: "absolute",
    borderRadius: 20
  },
  FlatList: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  item: {
    backgroundColor: "black",
    margin: 15,
    borderRadius: 8,
    elevation: 6,
    width: 145,
    height: 215
  }
});
