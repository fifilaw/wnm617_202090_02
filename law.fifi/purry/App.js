import React from "react";

import { HashRouter, Route, Link } from "react-router-dom";

import SignInScreen from "./app/screens/SignInScreen";
import HomeScreen from "./app/screens/HomeScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import MapScreen from "./app/screens/MapScreen";
import CatProfileScreen from "./app/screens/CatProfileScreen";
import EditCatProfileScreen from "./app/screens/EditCatProfileScreen";
import EditUserProfileScreen from "./app/screens/EditUserProfileScreen";
import AddCatScreen from "./app/screens/AddCatScreen";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={SignInScreen} />
      <Route path="/Signup" component={SignUpScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/HomeScreen" component={HomeScreen} />
      <Route path="/MapScreen" component={MapScreen} />
      <Route path="/ProfileScreen" component={ProfileScreen} />
      <Route path="/CatProfileScreen" component={CatProfileScreen} />
      <Route path="/EditCatProfileScreen" component={EditCatProfileScreen} />
      <Route path="/EditUserProfileScreen" component={EditUserProfileScreen} />
      <Route path="/AddCatScreen" component={AddCatScreen} />
    </HashRouter>
  );
}

export default App;
