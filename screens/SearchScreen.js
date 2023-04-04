import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
} from "react-native";
import styles from "../theme/styles";
import SongService from "../api/SongService";

const SearchScreen = (navigation) => {
  // Define state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [songs, setSongs] = useState([]);
  const placeholder = `Chercher une chanson ou un arstist`;

  // Load a new cocktail
  const loadSong = async (songName) => {
    setLoading(true);
    setError(false);

    try {
      const songs = await SongService.searchSongsByName(songName);
      // Update state
      setSongs(songs);
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
        onSubmitEditing={({ nativeEvent: { text } }) => loadSong(text)}
      />
      <ErrorMessage></ErrorMessage>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default SearchScreen;
