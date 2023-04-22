import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import SongItem from "./SongItem";

const SongList = ({songs, navigation})=> {
  return(
    <FlatList
      //style={styles.classementList}
      data={songs}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        return <SongItem song={item} navigation={navigation}/>;
      }}
    />
  );
}

export default SongList;