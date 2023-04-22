import React from "react";
import { useState, useEffect } from "react";
import { View, Text, Button, ActivityIndicator, FlatList,renderItem } from "react-native";
import styles from "../theme/styles";
import UserService from "../api/UserService";
import ArtistItem from "../components/ArtistItem";
import TrackItem from "../components/TrackItem";
import UserItem from "../components/UserItem";
import SongList from "../components/SongList";

const ProfilScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [topArtist, setTopArtist] = useState("");
  const [playcountArtist, setPlaycountArtist] = useState("");
  const [imageArtist, setImageArtist] = useState("");

  const [topTrack, setTopTrack] = useState("");
  const [topTrackArtist, setTopTrackArtist] = useState("");
  const [playcountTrack, setPlaycountTrack] = useState("");
  const [imageTrack, setImageTrack] = useState("");

  const [user, setUser] = useState("");
  const [userPlaycount, setUserPlaycount] = useState("");
  const [userFriends, setUserFriends] = useState("");
  const [userImage, setUserImage] = useState("");

  const [songs, setSongs] = useState([]);

  const loadArtist = async () => {
    setLoading(true);
    const artist = await UserService.getTopArtist();
    // Update state when API results are available
    setTopArtist(artist.name);
    setPlaycountArtist(artist.playcount);
    setImageArtist(artist.image[0].size);
    setLoading(false);
  };

  const loadTrack = async () => {
    setLoading(true);
    const track = await UserService.getTopTrack();
    // Update state when API results are available
    setTopTrack(track.name);
    setTopTrackArtist(track.artist.name);
    setPlaycountTrack(track.playcount);
    setImageTrack(track.image[0].size);
    setLoading(false);
  };

  const loadUser = async () => {
    setLoading(true);
    const user = await UserService.getInfo();
    setUser(user.name);
    setUserPlaycount(user.playcount);
    setUserFriends(user.subscriber);
    setUserImage(user.image);
    setLoading(false);
  };

  const loadSongs = async () => {
    setLoading(true);
    const songs = await UserService.getSongs();
    setSongs(songs);
    setLoading(false);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.songContainer}>
        <View style={styles.padding2}>
          <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
          <Text>{item.artist['#text']}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    loadArtist();
    loadTrack();
    loadUser();
    loadSongs();
  }, []);

  let mainComponent;

  if (loading)
    mainComponent = (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <View style={styles.screen}>
      <UserItem
        user={user}
        playcount={userPlaycount}
        friends={userFriends}
        image={userImage}
      />
      <ArtistItem
        artist={topArtist}
        playcount={playcountArtist}
        image={imageArtist}
      />
      <TrackItem
        name={topTrack}
        artist={topTrackArtist}
        playcount={playcountTrack}
        image={imageTrack}
      />
      <Text style={styles.titre}>Chansons récentes </Text>
      <FlatList
        data={songs}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ProfilScreen;
