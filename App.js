import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Routes from "./screen/route";
import Home from "./screen/home";
import * as Font from "expo-font";
import { StatusBar } from "react-native";
import Dashboard from "./screen/dashboard";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle = "default-content" hidden = {false} backgroundColor = "#425c5a" translucent = {true}/>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#425c5a",
    flex: 1,
  },
});


export default App;
