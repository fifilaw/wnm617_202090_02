import React from "react";
import { Text, View } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

import SignInScreen from "./app/screens/SignInScreen";
import HomeScreen from "./app/screens//HomeScreen";
import SignUpScreen from "./app/screens//SignUpScreen";
import MapScreen from "./app/screens//MapScreen";
import ProfileScreen from "./app/screens//ProfileScreen";
import CatProfileScreen from "./app/screens//CatProfileScreen";
import EditCatProfileScreen from "./app/screens//EditCatProfileScreen";
import EditUserProfileScreen from "./app/screens//EditUserProfileScreen";
import AddCatScreen from "./app/screens//AddCatScreen";

const App = () => {
  <NativeRouter>
    <Route path="/" component={SignInScreen} />
  </NativeRouter>;
};

export default App;
