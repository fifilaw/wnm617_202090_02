import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Styles } from "../../styles/Styles";

function MapScreen({ navigation }) {
  return (
    <View style={Styles.Pagecontainer}>
      <ImageBackground
        style={Styles.mapImage}
        source={require("../../assets/map.PNG")}
      >
        <Text style={Styles.tabTitle}>Map</Text>
      </ImageBackground>
    </View>
  );
}

export default MapScreen;
