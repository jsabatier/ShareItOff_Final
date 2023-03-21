import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../theme/styles";

const ProfilScreen = ({ navigation, route }) => {
  // Get the params
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the profil screen</Text>
      {/* Convert params to JSON strings before display */}
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default ProfilScreen;
