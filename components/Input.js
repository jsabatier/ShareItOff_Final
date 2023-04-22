import React from "react";
import { StyleSheet, View, Image, TextInput, Text } from "react-native";

const Input = ({ placeholder, imageUrl, hideCharacters, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <Image
        style={styles.inputIcon}
        source={{
          uri: imageUrl,
        }}
      />
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        keyboardType="email-address"
        autoCapitalize="none"
        secureTextEntry={hideCharacters}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "white",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
});
