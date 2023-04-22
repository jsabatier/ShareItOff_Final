import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../theme/styles";

const ArtistItem = ({ artist, playcount, image, navigation }) => {
  return (
    <View>
      <Text style={styles.titre}>Artiste de la semaine</Text>
      <TouchableOpacity
        style={styles.songContainer}
        onPress={() => {
          navigation.navigate("DescriptionScreen", {
            artist: artist,
          });
        }}
      >
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/2908/2908584.png" }} style={{ width: 50, height: 50 }} />
        <Text style={styles.text}>{artist}</Text>
        <Text style={styles.tinytext}>Playcount : {playcount}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArtistItem;
