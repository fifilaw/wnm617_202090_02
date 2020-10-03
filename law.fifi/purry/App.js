import React from "react";

import SignInScreen from "./app/screens/SignInScreen";
import HomeScreen from "./app/screens/HomeScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import MapScreen from "./app/screens/MapScreen";
import ProfileScreen from "./app/screens/ProfileScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen name="HomeScreen" component={HomeScreen} />
      <MaterialBottomTabs.Screen name="Map" component={MapScreen} />
      <MaterialBottomTabs.Screen name="Profile" component={ProfileScreen} />
    </MaterialBottomTabs.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="HomeScreen" children={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
