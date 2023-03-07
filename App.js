import React, { useEffect } from "react";
import { useState } from "react";
import { Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./theme/styles";
import fetchArtist from "./api/lastfmApi";

export default App = () => {
  // Define state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [artistName, setArtistName] = useState("");
  const [artsistDescription, setArtistDescription] = useState("");

  const loadArtist = async () => {
    setLoading(true);
    setError(false);

    try {
      const artist = await fetchArtist();
      setArtistName(artist.name);
      setArtistDescription(artist.bio.summary);
    } catch (e) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadArtist();
  }, []);

  function load(loading) {
    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }

  load({ loading });

  if (error) {
    return (
      <View style={[styles.container, { alignItems: "center" }]}>
        <Text>Something went wrong :\</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {artistName}
        {artsistDescription}
      </Text>
    </View>
  );
};
