import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../theme/styles";

const TrackItem = ({ name, artist, image,playcount, navigation }) => {
  return (
    <View>
      <Text style={styles.titre}>Chanson de la semaine</Text>
      <TouchableOpacity style={styles.songContainer}>
        <Image source={{ uri: "https://images.freeimages.com/fic/images/icons/2315/default_icon/256/media_vinyl_78.png" }} style={{ width: 50, height: 50 }} />
        <Image source={{ uri: image }} />
        <Text style={styles.text}>{name} - {artist} </Text>
        <Text style={styles.tinytext}>
        Playcount : {playcount}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrackItem;
