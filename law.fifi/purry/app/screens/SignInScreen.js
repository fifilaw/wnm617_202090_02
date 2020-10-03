import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Styles } from "../../styles/Styles";

function SignInScreen({ navigation }) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Sign In</Text>
      <Text style={Styles.formTitle}>username</Text>
      <TextInput style={Styles.formInput}></TextInput>
      <Text style={Styles.formTitle}>password</Text>
      <TextInput style={Styles.formInput}></TextInput>
      <Button
        onPress={() => navigation.navigate("HomeScreen")}
        title="Sign In"
        color="#edb97f"
        style={Styles.formButton}
      ></Button>
      <Text style={{ textAlign: "center", padding: 10 }}>
        Don't have an account?{" "}
        <Text
          onPress={() => navigation.navigate("SignUpScreen")}
          style={{ fontWeight: "bold" }}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

export default SignInScreen;
