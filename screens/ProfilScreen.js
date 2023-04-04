import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../theme/styles";

const ProfilScreen = ({ navigation }) => {
  // Get the params
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the profil screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default ProfilScreen;
