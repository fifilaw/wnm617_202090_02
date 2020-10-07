import { StyleSheet, Dimensions, StatusBar } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 55,
  },
  title: {
    fontSize: 20,
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
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
  },
  tabTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    paddingTop: 20,
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
    display: "flex",
    flex: 1,
    flexDirection: "row",
  },
  ListTitle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    marginLeft: 10,
  },
  ListImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  Button: {
    backgroundColor: "#edb97f",
    color: "white",
    fontSize: 12,
    width: "20%",
    padding: 8,
    marginTop: 10,
    marginLeft: "auto",
    marginRight: 15,
    textAlign: "center",
    borderRadius: 10,
  },
  CatProfileTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  CatProfileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    margin: 20,
  },
  ProfilePage: {
    padding: 15,
    margin: 5,
  },
  EditButton: {
    color: "#edb97f",
    paddingTop: 4,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 5,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#edb97f",
  },
  BackButton: {
    padding: 2,
    width: 50,
    color: "black",
    marginTop: 20,
  },
  botTabStyle: {
    padding: 5,
    margin: 5,
  },
  Header: {
    paddingLeft: 20,
  },
  ProfileCard: {
    margin: 0,
    flexDirection: "row",
  },
  CatInfo: {
    flexDirection: "column",

    padding: 20,
  },
  LogOutButton: {
    margin: 10,
    backgroundColor: "#edb97f",
    color: "white",
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 5,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#edb97f",
  },
  ProfileDetail: {
    padding: 20,
  },
});
