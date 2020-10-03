import { StyleSheet, Dimensions } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 55,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
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
  Pagecontainer: {
    flex: 1,
  },
  tabTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    backgroundColor: "white",
  },
  mapImage: {
    flex: 1,
    resizeMode: "cover",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
