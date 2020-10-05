import { StyleSheet, Dimensions, StatusBar } from "react-native";

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
    marginTop: StatusBar.currentHeight || 0,
  },
  tabTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    paddingTop: 40,
    backgroundColor: "white",
    width: "100%",
  },
  mapImage: {
    flex: 1,
    resizeMode: "cover",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  Card: {
    flex: 1,
    backgroundColor: "#edb97f",
    borderRadius: 5,
  },
  List: {
    margin: 15,
    flex: 1,
    justifyContent: "space-between",
  },
  ListItem: {
    margin: 10,
    padding: 10,
    fontSize: 15,
    borderRadius: 5,
    backgroundColor: "white",
  },
  Button: {
    color: "#edb97f",
  },
  CatProfileTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
  },
  ProfilePage: {
    padding: 15,
  },
  EditButton: {
    backgroundColor: "#edb97f",
    width: "50%",
    padding: 10,
    marginTop: 10,
    margin: "auto",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
  },
  BackButton: {
    padding: 2,
    width: 50,
    margin: 5,
    textAlign: "center",
    color: "blue",
  },
});
