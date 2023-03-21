import React from "react";
import { View, Text } from "react-native";
import styles from "../theme/styles";

const TchatScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the tchat screen</Text>
    </View>
  );
};

export default TchatScreen;
