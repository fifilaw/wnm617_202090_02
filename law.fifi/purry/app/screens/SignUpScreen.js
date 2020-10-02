import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function SignInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.formTitle}>username</Text>
      <TextInput style={styles.formInput}></TextInput>
      <Text style={styles.formTitle}>password</Text>
      <TextInput style={styles.formInput}></TextInput>
      <Text style={styles.formTitle}>confirm password</Text>
      <TextInput style={styles.formInput}></TextInput>
      <Button
        onPress={() => navigation.navigate("HomeScreen")}
        title="Sign Up"
        color="#edb97f"
        style={styles.formButton}
      ></Button>
      <Text style={{ textAlign: "center", padding: 10 }}>
        Already have an account?{" "}
        <Text
          onPress={() => navigation.navigate("SignInScreen")}
          style={{ fontWeight: 700 }}
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 50,
  },

  title: {
    fontSize: 40,
    fontWeight: 700,
    textAlign: "center",
    margin: 20,
  },
  formTitle: {
    fontSize: 15,
    marginBottom: 4,
  },
  formInput: {
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2,
    padding: 5,
    marginBottom: 15,
  },
  formButton: {
    padding: 15,
    margin: 6,
  },
});

export default SignInScreen;
