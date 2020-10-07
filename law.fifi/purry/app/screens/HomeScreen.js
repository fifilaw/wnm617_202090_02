import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Card,
  TouchableOpacity,
  StatusBar,
  Button,
  FlatList,
  Image,
} from "react-native";
import { Styles } from "../../styles/Styles";

export default function HomeScreen({ navigation }) {
  const [catName, useCatName] = useState([
    {
      key: "1",
      title: "Cat1",
      description: "Cat1 is a cute cat.",
      image: "https://picsum.photos/200",
    },
    {
      key: "2",
      title: "Cat2",
      description: "Cat2 is a cute cat.",
      image: "https://picsum.photos/200?random=4",
    },
    {
      key: "3",
      title: "Cat3",
      description: "Cat3 is a cute cat.",
      image: "https://picsum.photos/200?random=2",
    },
  ]);

  return (
    <View style={Styles.Pagecontainer}>
      <Text style={Styles.tabTitle}>Cat List</Text>
      <TouchableOpacity
        color="#edb97f"
        onPress={() => navigation.navigate("Add")}
      >
        <Text style={Styles.Button}>+ Add Cat</Text>
      </TouchableOpacity>

      <FlatList
        data={catName}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={Styles.ListItem}
            onPress={() => navigation.navigate("CatProfile", item)}
          >
            <Image source={{ uri: item.image }} style={Styles.ListImage} />
            <Text style={Styles.ListTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
