import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../theme/styles";

const DetailsScreen = ({ navigation, route }) => {
  // Get the params
  const { itemId, otherParam } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the details screen</Text>
      {/* Convert params to JSON strings before display */}
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => {
          // Navigate to Details again with one param
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100),
          });
        }}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default DetailsScreen;