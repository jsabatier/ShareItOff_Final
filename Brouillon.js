import {LastFMCache} from "./lastfm.api.cache"

/* Create a cache object */
var cache = new LastFMCache();

/* Create a LastFM object */
var lastfm = new LastFM({
  apiKey    : '83920c6715670d2cf5294347ca609ba1',
  apiSecret : 'c71ffc2acc3ccfa1c4ce435a490e9130',
  cache     : cache
});

/* Load some artist info. */
lastfm.artist.getInfo({artist: 'Caroline Polachek'}, {success: function(data){
  const artistTest = data.name
  //console.log(artistTest)
}, error: function(code, message){
  console.log(code)
  console.log(message)
}});

import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View} from 'react-native';
import { useState, useEffect} from "react";
//import {artisteTest} from "./TestApi.js"
// import {LastFMCache, Storage} from "./lastfm.api.cache"

const fetchArtist = () =>{
  const artists = fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=83920c6715670d2cf5294347ca609ba1&format=json");
  //const artists = response.json();

  return artists[0];
}

export default function App() {

  const [artist, setArtist] = useState("");

  const getArtist =()=>{
    
    const artist = fetchArtist();
    setArtist(artist.name);
    // catch (e) {
    //   console.log('erreur');
    //}

  }

  useEffect(() => {
    getArtist();
  }, []);

  return (
    <View style={styles.container}>
      <Text>ShareItOff</Text>
      {/* <artisteTest></artisteTest> */}
      {/* <FlatList
        data={artist}
      /> */}
      <Text>{artist}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});