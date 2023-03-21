import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
} from "react-native";
import styles from "../theme/styles";
import cocktailServ from "../api/cocktailService";

const SearchScreen = () => {
  // Define state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const placeholder = `Chercher une chason ou un arstist`;

  // Load a new cocktail
  const loadCocktail = async (cocktailName) => {
    setLoading(true);
    setError(false);

    try {
      const cocktails = await cocktailServ.searchCocktailsByName(cocktailName);
      // Update state
      setCocktails(cocktails);
    } catch (e) {
      setError(true);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const ErrorMessage = () => {
    if (error) {
      return (
        <View style={[styles.container, { alignItems: "center" }]}>
          <Text>Something went wrong :\</Text>
        </View>
      );
    } else {
      return <></>;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder={placeholder}
        onSubmitEditing={({ nativeEvent: { text } }) => loadCocktail(text)}
      />
      <ErrorMessage></ErrorMessage>
      <FlatList
        data={cocktails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default SearchScreen;
