import React, { useEffect } from "react";
import { Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./theme/styles";
import RootShareItOffNavigator from "./navigation/RootShareItOffNavigator";

export default App = () => {

  return (
    <View style={styles.navigator}>
      <RootShareItOffNavigator/>
    </View>
  );
};
