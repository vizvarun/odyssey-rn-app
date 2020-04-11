import React, { Component } from "react";
import { View, Text } from "react-native";
import {Router, Scene, Stack, Actions} from "react-native-router-flux";
import Forgot from "./forgot";
import Home from "./home";
import Otp from "./otp";
import Signup from "./signup";
import Login from "./login";
import Newpassword from "./newpassword";
import Dashboard from "./dashboard";

class Routes extends Component {

  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="home" component={Home} title="Home" initial= {true}/>
          <Scene key="login" component={Login} title="Login" />
          <Scene key="signup" component={Signup} title="Register" />
          <Scene key="forgot" component={Forgot} title="Forgot" />
          <Scene key="otp" component={Otp} title="Otp" />
          <Scene key="newpassword" component={Newpassword} title="Newpassword" />
          <Scene key="dashboard" component={Dashboard} title="Dashboard" />
        </Stack>
      </Router>
    );
  }
}


export default Routes;
