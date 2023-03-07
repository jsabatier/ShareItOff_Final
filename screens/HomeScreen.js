import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../theme/styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          // Navigate to the Details route with 2 params
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "anything you want here",
          });
        }}
      />
    </View>
  );
};

export default HomeScreen;