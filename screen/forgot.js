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

class Forgot extends Component {
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

  otp(){
    Actions.otp()
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
              <Text style={styles.text2}>Forgot Password?</Text>
            </View>
            <View>
              <Text style={styles.text3}>
                Don't worry, we are here to help you.
              </Text>
            </View>
            <ImageBackground
              source={require("../assets/images/maps.png")}
              style={styles.map}
            >
              <View style={styles.signin}>
                <TouchableOpacity style={{ margin: 1, flexDirection:"row" }} onPress={this.otp}>
                  <Image
                    source={require("../assets/images/email.png")}
                    fadeDuration={0}
                    style={{ width: 22, height: 22 }}
                  />
                  <Text style={styles.text1}>Send OTP on Email</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.signin}>
                <TouchableOpacity style={{ margin: 1, flexDirection:"row" }} onPress={this.otp}>
                <Image
                    source={require("../assets/images/phone.png")}
                    fadeDuration={0}
                    style={{ width: 22, height: 22 }}
                  />
                  <Text style={styles.text1}>Send OTP on Phone</Text>
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
    color: "white",
    marginHorizontal: 15
  },
  map: {
    width: "100%",
    height: "70%",
    paddingTop: 50,
    alignItems: "center",
  },
  text2: {
    alignItems: "center",
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    color: "#ffcea2",
    justifyContent: "center",
    marginVertical: 10,
  },
  text3: {
    alignItems: "center",
    fontSize: 15,
    fontFamily: "Poppins-Light",
    color: "#a2bfbd",
  },
});

export default Forgot;
