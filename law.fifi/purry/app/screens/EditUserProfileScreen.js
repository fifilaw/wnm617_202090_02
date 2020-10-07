import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Styles } from "../../styles/Styles";

function EditUserProfileScreen({ route, navigation }) {
  return (
    <View style={Styles.ProfilePage}>
      <Text
        style={Styles.BackButton}
        onPress={() => navigation.navigate("Profile")}
      >
        Back
      </Text>
      <Text style={Styles.title}>Edit User</Text>

      <Text>This is the edit user page</Text>
    </View>
  );
}

export default EditUserProfileScreen;
