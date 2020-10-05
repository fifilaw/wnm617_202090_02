import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Styles } from "../../styles/Styles";

function EditCatProfileScreen({ route, navigation }) {
  return (
    <View style={Styles.ProfilePage}>
      <Text
        style={Styles.BackButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        Back
      </Text>
      <Text style={Styles.title}>Edit Cat</Text>

      <Text>This is the edit cat page</Text>
    </View>
  );
}

export default EditCatProfileScreen;
