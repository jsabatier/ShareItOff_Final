import React from "react";
import { useState,useEffect } from "react";
import { View, Text, ActivityIndicator,Button} from "react-native";
import styles from "../theme/styles";
import fetchArtist from "../api/lastfmApi";

const DescriptionScreen = ({ artist, navigation }) => {
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
      <Text style={styles.text}>This is the description </Text>
      <Text style={styles.text}>
        {artistName}
        {}
        {artsistDescription}
      </Text>
      <Button
        title="Retourner au Profil"
        onPress={() => navigation.navigate("Profil")}
      />
      <Button
        title="Retourner à l'accueil"
        onPress={() => navigation.navigate("Profil")}
      />
    </View>
  );
};

export default DescriptionScreen;
