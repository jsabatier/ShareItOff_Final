import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Input from "./Input";
import authenticateUser from "../api/authentification";
import styles from "../theme/styles";

// The onLoginSuccessful prop is only necessary when linking authentication and module display
const AuthForm = ({ onLoginSuccessful }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    const user = authenticateUser(login, password);
    let msg = user !== null ? "Connexion réussie" : "Erreur de connexion";
    msg += ` avec les identifiants : ${login + "/" + password}`;
    if (user !== null) onLoginSuccessful(user);
    else Alert.alert("Action sélectionnée", msg);
  };

  const resetPassword = () => {
    Alert.alert("Action sélectionnée", "mail : test@test.fr / mdp : test");
  };

  const signUp = () => {
    Alert.alert("Action sélectionnée", "Inscription");
  };

  return (
    <View style={styles.containerAuth}>
      <Image style={styles.formImage} source={require("../assets/last.fm.png")} />
      <Input
        placeholder="Email"
        imageUrl="https://img.icons8.com/doodle/48/000000/email-sign.png"
        hideCharacters={false}
        onChangeText={(text) => setLogin(text)}
      />
      <Input
        placeholder="Mot de passe"
        imageUrl="https://img.icons8.com/ultraviolet/40/000000/key.png"
        hideCharacters={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={[styles.buttonContainer, styles.signInButton]}
        onPress={signIn}
      >
        <Text style={styles.loginText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={resetPassword}>
        <Text>Mot de passe oublié ?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;


