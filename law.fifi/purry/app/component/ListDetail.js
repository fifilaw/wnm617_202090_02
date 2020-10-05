import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Styles } from "../../styles/Styles";

const [catName, setCat] = useState([
  { name: "Cat1", key: "1" },
  { name: "Cat2", key: "2" },
  { name: "Cat3", key: "3" },
  { name: "Cat4", key: "4" },
]);

function ListDetail(props) {
  return (
    <View style={Styles.card}>
      <View style={Styles.cardContent}>{props.children}</View>
    </View>
  );
}

export default ListDetail;
