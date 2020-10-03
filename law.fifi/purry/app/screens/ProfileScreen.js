import React from "react";
import { View, Text } from "react-native";
import { Styles } from "../../styles/Styles";

function ProfileScreen({ navigation }) {
  return (
    <View style={Styles.Pagecontainer}>
      <Text style={Styles.tabTitle}>User Profile</Text>
      <Text onPress={() => navigation.navigate("SignInScreen")}>Logout</Text>
    </View>
  );
}

export default ProfileScreen;
