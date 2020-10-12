import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { Styles } from "../../styles/Styles";
import { HashRouter, Route, Link } from "react-router-dom";
import BottomNav from "../component/BottomNav";

function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={Styles.Pagecontainer}>
      <View style={Styles.header}>
        <Text style={Styles.tabTitle}>User Profile</Text>
      </View>
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

      <BottomNav />
    </SafeAreaView>
  );
}

export default ProfileScreen;
