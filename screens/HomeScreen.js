import React from "react";
import { View, Text } from "react-native";
import styles from "../theme/styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the home screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Profil")}
      />
    </View>
  );
};

export default HomeScreen;
