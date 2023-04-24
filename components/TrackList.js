import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import styles from "../theme/styles";
import TrackItem from "./TrackItem";

const SongList = ({ songs, navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.songContainer}>
        <View style={styles.padding2}>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.artist["#text"]}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={songs}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default SongList;
