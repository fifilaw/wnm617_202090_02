import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Styles } from "../../styles/Styles";
import { HashRouter, Route, Link } from "react-router-dom";

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
      <Link to={"/HomeScreen"} style={{ textDecoration: "none" }}>
        <Button
          title="Sign Up"
          color="#edb97f"
          style={Styles.formButton}
        ></Button>
      </Link>
      <Text style={{ textAlign: "center", padding: 10 }}>
        Already have an account?{" "}
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <Text style={{ fontWeight: "bold" }}>Sign In</Text>
        </Link>
      </Text>
    </View>
  );
}

export default SignInScreen;
