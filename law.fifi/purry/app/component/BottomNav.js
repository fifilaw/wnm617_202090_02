import React from "react";
import { View, Text } from "react-native";
import { Styles } from "../../styles/Styles";
import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <View style={{ flex: "none" }}>
      <View style={Styles.BottomNav}>
        <Link to={"/HomeScreen"} style={{ textDecoration: "none" }}>
          <Text style={Styles.bottomNavLi}>List</Text>
        </Link>
        <Link to={"/MapScreen"} style={{ textDecoration: "none" }}>
          <Text style={Styles.bottomNavLi}>Map</Text>
        </Link>
        <Link to={"/ProfileScreen"} style={{ textDecoration: "none" }}>
          <Text style={Styles.bottomNavLi}>Profile</Text>
        </Link>
      </View>
    </View>
  );
}

export default BottomNav;
