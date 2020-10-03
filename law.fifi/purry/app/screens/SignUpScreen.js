import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Styles } from "../../styles/Styles";

function SignInScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Sign Up</Text>
      <Text style={Styles.formTitle}>username</Text>
      <TextInput style={Styles.formInput}></TextInput>
      <Text style={Styles.formTitle}>password</Text>
      <TextInput style={Styles.formInput}></TextInput>
      <Text style={Styles.formTitle}>confirm password</Text>
      <TextInput style={Styles.formInput}></TextInput>
      <Button
        onPress={() => navigation.navigate("HomeScreen")}
        title="Sign Up"
        color="#edb97f"
        style={Styles.formButton}
      ></Button>
      <Text style={{ textAlign: "center", padding: 10 }}>
        Already have an account?{" "}
        <Text
          onPress={() => navigation.navigate("SignInScreen")}
          style={{ fontWeight: "bold" }}
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
}

export default SignInScreen;
