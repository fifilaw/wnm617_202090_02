import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Styles } from "../../styles/Styles";

function AddCatScreen({ navigation }) {
  return (
    <View style={Styles.ProfilePage}>
      <Text
        style={Styles.BackButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        Back
      </Text>
      <Text style={Styles.title}>Add Cat</Text>
      <Text style={Styles.formTitle}>Cat Name</Text>
      <TextInput style={Styles.formInput}></TextInput>
      <Text style={Styles.formTitle}>Description</Text>
      <TextInput style={Styles.formInput}></TextInput>
      <Button
        onPress={() => {
          console.log("Added");
        }}
        title="Add Cat"
        color="#edb97f"
        style={Styles.formButton}
      ></Button>
    </View>
  );
}

export default AddCatScreen;
