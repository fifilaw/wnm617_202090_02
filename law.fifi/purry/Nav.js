import React from "react";
import { Text, View } from "react-native";
import { Styles } from "./styles/Styles";

import { NativeRouter, Route, Link } from "react-router-native";
function Home() {
  return <Text style={styles.header}>Home</Text>;
}

function Nav() {
  retun(
    <NativeRouter>
      <View style={Styles.pageContainer}>
        <Link to="/">
          <Text>Home</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </NativeRouter>
  );
}

export default Nav;
