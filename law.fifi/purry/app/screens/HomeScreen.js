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
  ScrollView,
} from "react-native";
import { Styles } from "../../styles/Styles";
import { HashRouter, Route, Link } from "react-router-dom";
import BottomNav from "../component/BottomNav";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
      key: "4",
      title: "Cat4",
      description: "Cat4 is a cute cat.",
      image: "https://picsum.photos/200?random=2",
    },
    {
      key: "5",
      title: "Cat5",
      description: "Cat5 is a cute cat.",
      image: "https://picsum.photos/200?random=5",
    },
    {
      key: "6",
      title: "Cat6",
      description: "Cat6 is a cute cat.",
      image: "https://picsum.photos/200?random=6",
    },
    {
      key: "7",
      title: "Cat7",
      description: "Cat7 is a cute cat.",
      image: "https://picsum.photos/200?random=8",
    },
    {
      key: "8",
      title: "Cat8",
      description: "Cat8 is a cute cat.",
      image: "https://picsum.photos/200?random=8",
    },
    {
      key: "9",
      title: "Cat9",
      description: "Cat9 is a cute cat.",
      image: "https://picsum.photos/200?random=8",
    },
    {
      key: "10",
      title: "Cat10",
      description: "Cat10 is a cute cat.",
      image: "https://picsum.photos/200?random=8",
    },
    {
      key: "11",
      title: "Cat11",
      description: "Cat11 is a cute cat.",
      image: "https://picsum.photos/200?random=8",
    },
    {
      key: "12",
      title: "Cat12",
      description: "Cat12 is a cute cat.",
      image: "https://picsum.photos/200?random=8",
    },
    {
      key: "13",
      title: "Cat13",
      description: "Cat13 is a cute cat.",
      image: "https://picsum.photos/200?random=8",
    },
  ]);

  return (
    <View style={Styles.Pagecontainer}>
      <View style={Styles.header}>
        <Text style={Styles.tabTitle}>Cat List</Text>
        <TouchableOpacity
          style={Styles.Button}
          color="#edb97f"
          onPress={() => navigation.navigate("AddCatScreen")}
        >
          <Text>+ Add Cat</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.FlatList}>
        <FlatList
          data={catName}
          renderItem={({ item }) => (
            <Link to={"/CatProfileScreen"} style={{ textDecoration: "none" }}>
              <TouchableOpacity style={Styles.ListItem}>
                <Image source={{ uri: item.image }} style={Styles.ListImage} />
                <Text style={Styles.ListTitle}>{item.title}</Text>
              </TouchableOpacity>
            </Link>
          )}
        />
      </View>
      <BottomNav />
    </View>
  );
}
