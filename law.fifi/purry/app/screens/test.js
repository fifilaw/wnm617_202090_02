import React from "react";

import SignInScreen from "./SignInScreen";
import HomeScreen from "./HomeScreen";
import SignUpScreen from "./SignUpScreen";
import MapScreen from "./MapScreen";
import ProfileScreen from "./ProfileScreen";
import CatProfileScreen from "./CatProfileScreen";
import EditCatProfileScreen from "./EditCatProfileScreen";
import EditUserProfileScreen from "./EditUserProfileScreen";
import AddCatScreen from "./AddCatScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Styles } from "../../styles/Styles";

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function HomeNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" children={Tabs} />
      <Stack.Screen name="Add" component={AddCatScreen} />
      <Stack.Screen name="CatProfile" component={CatProfileScreen} />
      <Stack.Screen name="EditCat" component={EditCatProfileScreen} />
    </Stack.Navigator>
  );
}
function UserProfileNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditUser" component={EditUserProfileScreen} />
    </Stack.Navigator>
  );
}

function Tabs() {
  return (
    <BottomTabs.Navigator
      tabBarOptions={{
        activeBackgroundColor: "#edb97f",
        inactiveBackgroundColor: "white",
        activeTintColor: "white",
      }}
      labelStyle={{ padding: 5 }}
      style={Styles.botBarStyle}
    >
      <BottomTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        style={Styles.botTabStyle}
      />
      <BottomTabs.Screen name="Map" component={MapScreen} />
      <BottomTabs.Screen name="Profile" children={UserProfileNav} />
    </BottomTabs.Navigator>
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
        <Stack.Screen name="HomeScreen" children={HomeNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
