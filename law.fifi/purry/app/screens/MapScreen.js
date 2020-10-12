import React from "react";
import { SafeAreaView, View, Text, ImageBackground } from "react-native";
import { Styles } from "../../styles/Styles";
import BottomNav from "../component/BottomNav";

function MapScreen({ navigation }) {
  return (
    <SafeAreaView style={Styles.Pagecontainer}>
      <ImageBackground
        style={Styles.mapImage}
        source={require("../../assets/img/map2.png")}
      >
        <View style={Styles.header}>
          <Text style={Styles.tabTitle}>Map</Text>
        </View>
      </ImageBackground>

      <BottomNav />
    </SafeAreaView>
  );
}

export default MapScreen;
