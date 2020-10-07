import React from "react";
import { SafeAreaView, View, Text, ImageBackground } from "react-native";
import { Styles } from "../../styles/Styles";

function MapScreen({ navigation }) {
  return (
    <SafeAreaView style={Styles.Pagecontainer}>
      <ImageBackground
        style={Styles.mapImage}
        source={require("../../assets/img/map2.png")}
      >
        <Text style={Styles.tabTitle}>Map</Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default MapScreen;
