import React from "react";
import { View, Text, Image } from "react-native";
import { Styles } from "../../styles/Styles";

function CatProfileScreen({ route, navigation }) {
  const { title, description, image } = route.params;

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
        <Image source={{ uri: image }} style={Styles.CatProfileImage} />
        <View style={Styles.CatInfo}>
          <Text style={Styles.CatProfileTitle}>{title}</Text>
          <Text
            style={Styles.EditButton}
            onPress={() => navigation.navigate("EditCat")}
          >
            Edit Profile
          </Text>
        </View>
      </View>
      <View style={Styles.ProfileDetail}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Cat Info:</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}

export default CatProfileScreen;
