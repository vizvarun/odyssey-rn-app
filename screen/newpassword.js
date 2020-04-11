import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Actions } from "react-native-router-flux";

let customFonts = {
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.otf"),
};

class Newpassword extends Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  getBack(){
    Actions.pop()
  }

  login(){
    Actions.login()
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={require("../assets/images/bg.png")}
            style={{ width: "100%", height: "100%", alignItems: "center" }}
          >
            <View>
              <TouchableOpacity style={{ marginLeft: -185 }} onPress={this.getBack}>
                <Image
                  source={require("../assets/images/back.png")}
                  fadeDuration={0}
                  style={{ width: 20, height: 20 }}
                ></Image>
                <Text
                  style={{
                    marginTop: 5,
                    color: "white",
                    fontFamily: "Poppins-Light",
                    fontSize: 11,
                  }}
                >
                  Back
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/images/logodark.png")}
              />
            </View>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../assets/images/lock.png")}
                  fadeDuration={0}
                  style={{ width: 25, height: 25, marginHorizontal: 2 }}
                />
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  placeholder="Password"
                  placeholderTextColor="#ffcea2"
                />
                <TouchableOpacity>
                  <Image
                    source={require("../assets/images/eyeoff.png")}
                    fadeDuration={0}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../assets/images/check.png")}
                  fadeDuration={0}
                  style={{ width: 25, height: 25, marginHorizontal: 2 }}
                />
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  placeholder="Confirm Password"
                  placeholderTextColor="#ffcea2"
                />
                <TouchableOpacity>
                  <Image
                    source={require("../assets/images/eyeoff.png")}
                    fadeDuration={0}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <ImageBackground
              source={require("../assets/images/maps.png")}
              style={styles.map}
            >
              <View style={styles.signin}>
                <TouchableOpacity style={{ margin: 1 }} onPress={this.login}>
                  <Text style={styles.text1}>Submit</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </ImageBackground>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 60,
    backgroundColor:"#425c5a"
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
  signin: {
    marginTop: 15,
    backgroundColor: "#ffcea2",
    width: 300,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 25,
  },
  text1: {
    textTransform: "uppercase",
    fontSize: 15,
    fontFamily: "Poppins-Regular",
  },
  map: {
    width: "100%",
    height: "70%",
    paddingTop: 50,
    marginTop: -10,
    alignItems: "center",
  },
  input: {
    width: 250,
    height: 50,
    color: "#ffcea2",
    borderBottomColor: "#a2bfbd",
    borderBottomWidth: 2,
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal: 15,
    position: "relative",
    fontFamily: "Poppins-Light",
  },
  forgot: {
    flexDirection: "row",
    marginTop: 50,
  },
  textfg: {
    marginHorizontal: 5,
    color: "#a2bfbd",
    fontFamily: "Poppins-Light",
    fontSize: 12,
  },
  textrec: {
    marginHorizontal: 5,
    color: "white",
    fontFamily: "Poppins-Light",
    fontSize: 12,
  },
  dash: {
    marginVertical: 10,
  },
  textdash: {
    color: "#ffcea2",
  },
  new: {
    flexDirection: "row",
  },
  placeholder: {
    color: "#ffcea2",
  },
});

export default Newpassword;
