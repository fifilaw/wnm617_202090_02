import React from "react";
import { View, Text, Image } from "react-native";
import { Styles } from "../../styles/Styles";
import { HashRouter, Route, Link } from "react-router-dom";

function CatProfileScreen({ route, navigation }) {
  return (
    <View style={Styles.Pagecontainer}>
      <View style={Styles.Header}>
        <Text
          style={Styles.BackButton}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          Back
        </Text>
      </View>
      <View style={Styles.ProfileCard}>
        <Image
          source={{ uri: "https://picsum.photos/200?random=6" }}
          style={Styles.CatProfileImage}
        />
        <View style={Styles.CatInfo}>
          <Text style={Styles.CatProfileTitle}>Cat Profile</Text>
          <Link to={"/EditCatProfileScreen"} style={{ textDecoration: "none" }}>
            <Text style={Styles.EditButton}>Edit Profile</Text>
          </Link>
        </View>
      </View>
      <View style={Styles.ProfileDetail}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Cat Info:</Text>
        <Text>This is the profile page of a cute cat.</Text>
      </View>
    </View>
  );
}

export default CatProfileScreen;
