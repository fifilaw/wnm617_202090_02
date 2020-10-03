import React from "react";
import { View, Text } from "react-native";
import { Styles } from "../../styles/Styles";

function HomeScreen({ navigation }) {
  return (
    <View style={Styles.Pagecontainer}>
      <Text style={Styles.tabTitle}>Cat List</Text>
    </View>
  );
}

export default HomeScreen;
