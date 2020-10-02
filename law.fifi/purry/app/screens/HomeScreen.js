import React from "react";
import { View, Text } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Text onPress={() => navigation.navigate("SignInScreen")}>Logout</Text>
    </View>
  );
}

export default HomeScreen;
