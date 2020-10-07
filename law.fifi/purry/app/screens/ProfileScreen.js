import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { Styles } from "../../styles/Styles";

function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={Styles.Pagecontainer}>
      <Text style={Styles.tabTitle}>User Profile</Text>
      <View style={Styles.ProfileCard}>
        <Image
          source={require("../../assets/img/suju.png")}
          style={Styles.CatProfileImage}
        />
        <View style={Styles.CatInfo}>
          <Text style={Styles.CatProfileTitle}>User</Text>
          <Text
            style={Styles.EditButton}
            onPress={() => navigation.navigate("EditUser")}
          >
            Edit Profile
          </Text>
        </View>
      </View>
      <Text
        onPress={() => navigation.navigate("SignInScreen")}
        style={Styles.LogOutButton}
      >
        Logout
      </Text>
    </SafeAreaView>
  );
}

export default ProfileScreen;
