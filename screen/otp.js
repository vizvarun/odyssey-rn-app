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
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { Actions } from "react-native-router-flux";

let customFonts = {
  "Poppins-Regular": require("../assets/fonts/Poppins-Regular.otf"),
  "Poppins-Light": require("../assets/fonts/Poppins-Light.otf"),
};

class Otp extends Component {
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

  newp(){
    Actions.newpassword()
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
              <Text style={styles.text2}>Enter OTP</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text3}>Haven't recieved yet?</Text>
              <TouchableOpacity>
                <Text style={styles.text4}>Send Again</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <OTPInputView
                style={{ width: "80%", height: 200 }}
                pinCount={4}
                code=""
                autoFocusOnLoad={true}
                codeInputFieldStyle={styles.enterotp}
                codeInputHighlightStyle={styles.borderStyleHighLighted}
                onCodeFilled={(code) => {}}
              />
            </View>
            <ImageBackground
              source={require("../assets/images/maps.png")}
              style={styles.map}
            >
              <View style={styles.signin}>
                <TouchableOpacity style={{ margin: 1, flexDirection: "row" }} onPress={this.newp}>
                  <Text style={styles.text1}>Verify</Text>
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
    backgroundColor: "#425C5A"
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
  signin: {
    marginTop: 30,
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
    marginHorizontal: 15,
  },
  map: {
    width: "100%",
    height: "70%",
    paddingTop: 50,
    marginTop: -40,
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
    fontSize: 14,
    fontFamily: "Poppins-Light",
    color: "#a2bfbd",
    marginHorizontal: 5,
  },
  text4: {
    alignItems: "center",
    fontSize: 14,
    fontFamily: "Poppins-Light",
    color: "white",
    marginHorizontal: 5,
  },
  enterotp: {
    width: 60,
    height: 60,
    borderColor: "#a2bfbd",
    borderWidth: 3,
    borderRadius: 50,
    marginTop: -20,
    marginHorizontal: 10,
    alignItems: "center",
    fontFamily: "Poppins-Light",
    color: "#ffcea2",
    fontSize: 20,
    justifyContent: "center",
  },
  borderStyleBase: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});

export default Otp;
