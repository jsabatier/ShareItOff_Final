import React from "react";
import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Button, FlatList} from "react-native";
import styles from "../theme/styles";
import HomeService from "../api/HomeService";

const HomeScreen = ({ navigation }) => {
  // Define state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [friends, setFriends] = useState([]);
  const [friendsRecentTracks, setFriendsRecentTracks] = useState([]);

  const loadFriends = async () => {
    setLoading(true);
    setError(false);

    try {
      const friends = await HomeService.getFriends();
      setFriends(friends);
    } catch (e) {
      setError(true);
    }

    setLoading(false);
  };

  const loadFriendsRecent = async () => {
    setLoading(true);
    setError(false);

    try {
      const recentTracks = await HomeService.fetchFriendsRecentTracks();
      setFriendsRecentTracks(recentTracks);
    } catch (e) {
      setError(true);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadFriends();
    loadFriendsRecent(friends);
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

  const renderRecentTrack = ({ item }) => {
    const image = item.image[2]['#text'] || null;
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        {image && <Image source={{ uri: image }} style={{ width: 50, height: 50, marginRight: 10 }} />}
        <View>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text>{item.artist['#text']}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Bienvenu sur ShareItOff !</Text>
      <Text style={styles.text}> Voici les dernières musiques auquels vos amis écoutaient :</Text>
      <FlatList
      data={friendsRecentTracks}
      keyExtractor={(item) => item.url}
      renderItem={renderRecentTrack}
    />
    </View>
  );
};

export default HomeScreen;
