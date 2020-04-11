import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

class Dashboard extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={{ marginLeft: -185 }} onPress={this.getBack}>
            <Image
              source={require("../assets/images/menudark.png")}
              fadeDuration={0}
              style={{ width: 30, height: 30, marginLeft: 10, marginTop: 10 }}
            ></Image>
          </TouchableOpacity>
        </View>

        <View>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/images/logolight.png")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 70,
    backgroundColor: "#fff",
  },
  tinyLogo: {
    width: 120,
    height: 120,
    marginTop: -68,
  },
});

export default Dashboard;
