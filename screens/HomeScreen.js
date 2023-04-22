import React from "react";
import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Button } from "react-native";
import styles from "../theme/styles";
import HomeService from "../api/HomeService";
import SongList from "../components/SongList";
import TrackItem from "../components/TrackItem";

const HomeScreen = ({ navigation }) => {
  // Define state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [friends, setFriends] = useState([]);
  const [friendsRecent, setFriendsRecent] = useState("");

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
      const friendsRecent = await HomeService.getFriendsRecent();
      setFriendsRecent(friendsRecent);
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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the home screen</Text>
      <TrackItem song={friendsRecent} />
    </View>
  );
};

export default HomeScreen;
