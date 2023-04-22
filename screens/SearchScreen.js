import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
} from "react-native";
import styles from "../theme/styles";
import SongService from "../api/SongService";
import SongList from "../components/SongList"

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
      <SongList songs={songs} navigation={navigation} />
    </View>
  );
};

export default SearchScreen;
