import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";

const SongItem = ({ song, navigation }) => {
    return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.navigate("Detailssongs", {
            songId: song.id,
          });
        }}
      >
        <Image source="${song.image}"/>
        <Text>
            {song.image} - {song.name} - {song.artiste}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SongItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
});
