import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Styles } from "../../styles/Styles";

function CatProfileScreen({ route, navigation }) {
  const { title, description } = route.params;

  return (
    <View style={Styles.ProfilePage}>
      <Text
        style={Styles.BackButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        Back
      </Text>
      <Text style={Styles.CatProfileTitle}>{title}</Text>
      <Text>{description}</Text>
      <Text
        style={Styles.EditButton}
        onPress={() => navigation.navigate("EditCat")}
      >
        Edit Profile
      </Text>
    </View>
  );
}

export default CatProfileScreen;
