import styles from "./theme/styles";
import RootShareItOffNavigator from "./navigation/RootShareItOffNavigator";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AuthForm from "./components/AuthForm";

export default function App() {
  const [loggedUser, setLoggedUser] = useState();

  // Create either authentication form or module list component,
  // depending on the presence of a logged user
  const authForm = !loggedUser ? (
    <AuthForm onLoginSuccessful={(user) => setLoggedUser(user)} />
  ) : null;
  const rootStack = loggedUser ? <RootShareItOffNavigator /> : null;

  return (
    <View style={styles.auth}>
      {authForm}
      {rootStack}
    </View>
  );
}

