import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  Card,
  TouchableOpacity,
  StatusBar,
  Button,
  FlatList,
} from "react-native";
import { Styles } from "../../styles/Styles";

export default function HomeScreen({ navigation }) {
  const [catName, useCatName] = useState([
    {
      key: "1",
      title: "Cat1",
      description: "Cat1 is a cute cat.",
    },
    {
      key: "2",
      title: "Cat2",
      description: "Cat2 is a cute cat.",
    },
    {
      key: "3",
      title: "Cat3",
      description: "Cat3 is a cute cat.",
    },
  ]);

  return (
    <SafeAreaView style={Styles.Pagecontainer}>
      <Text style={Styles.tabTitle}>Cat List</Text>
      <Button
        style={Styles.Button}
        title="Add"
        onPress={() => navigation.navigate("Add")}
      >
        Add
      </Button>

      <FlatList
        data={catName}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("CatProfile", item)}
          >
            <Text style={Styles.ListItem}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
