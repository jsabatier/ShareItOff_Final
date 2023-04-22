import React from "react";
import {useState, useEffect} from "react";
import { View, Text, Button,ActivityIndicator } from "react-native";
import styles from "../theme/styles";
import UserService from "../api/UserService";
import ArtistItem from "../components/ArtistItem";

const ProfilScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [topArtist, setTopArtist] = useState('');

  const loadArtist = async()=>{
    setLoading(true);
    const artist=await UserService.getTopArtist();
    // Update state when API results are available
    setTopArtist(artist);
    setLoading(false);
  }

  useEffect(() => {
    loadArtist();
  }, []);

  let mainComponent;
  if (loading)
    mainComponent = (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  else
    mainComponent = (
      <ArtistItem artist={topArtist}/>
    );

  return (
    <View style={styles.container}>
      {mainComponent}
    </View>
  );
};

export default ProfilScreen;
