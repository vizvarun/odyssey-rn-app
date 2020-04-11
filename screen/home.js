import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Login from "./login";
import Signup from "./signup";
import {Actions} from "react-native-router-flux";

let customFonts = {
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.otf"),
};

class Home extends Component {
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

  login() {
    Actions.login()
  }
  signup() {
    Actions.signup()
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
              <Image
                style={styles.tinyLogo}
                source={require("../assets/images/logodark.png")}
              />
            </View>
            <View style={styles.signin}>
              <TouchableOpacity onPress={this.login}>
                <Text style={styles.text1}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.signup}>
              <TouchableOpacity onPress={this.signup}>
                <Text style={styles.text2}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <ImageBackground
              source={require("../assets/images/maps.png")}
              style={styles.map}
            >
              <View>
                <Text style={styles.loginwith}>-------   Login with   -------</Text>
              </View>
              <View style={styles.oauthmenu}>
                <View style={styles.oauth}>
                  <TouchableOpacity style={styles.oauthtoken}>
                    <Image
                      source={require("../assets/images/facebook-icon.png")}
                      fadeDuration={0}
                      style={{ width: 28, height: 28, marginHorizontal: 4 }}
                    />
                    <Text style={styles.text3}>Facebook</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.oauth}>
                  <TouchableOpacity style={styles.oauthtoken}>
                    <Image
                      source={require("../assets/images/google-icon.png")}
                      fadeDuration={0}
                      style={{ width: 22, height: 22, marginHorizontal: 10 }}
                    />
                    <Text style={styles.text3}>Google</Text>
                  </TouchableOpacity>
                </View>
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
    paddingVertical: 70,
    backgroundColor: "#425c5a",
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
  signin: {
    marginTop: 40,
    backgroundColor: "#ffcea2",
    width: 300,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    borderRadius: 25,
  },
  signup: {
    marginTop: 30,
    backgroundColor: "#a2bfbd",
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
  text2: {
    textTransform: "uppercase",
    fontSize: 15,
    color: "white",
    fontFamily: "Poppins-Regular",
  },
  loginwith: {
    marginTop: -30,
    color: "#ffcea2",
    fontFamily: "Poppins-Light",
  },
  map: {
    width: "100%",
    height: "70%",
    paddingTop: 50,
    marginVertical: 30,
    alignItems: "center",
  },
  oauth: {
    marginHorizontal: 15,
    backgroundColor: "#a2bfbd",
    width: 130,
    height: 50,
    justifyContent: "center",
    borderRadius: 25,
  },
  text3: {
    fontSize: 12,
    color: "white",
    fontFamily: "Poppins-Light",
  },
  oauthmenu: {
    flexDirection: "row",
    marginVertical: 40,
  },
  oauthtoken: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
  },
});

export default Home;
