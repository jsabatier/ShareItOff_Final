import React from "react";
import { Text, View, TouchableOpacity} from "react-native";
import styles from "../theme/styles"

const ArtistItem = ({ artist, navigation }) => {
    return (
    <View>
        <TouchableOpacity
        style={styles.containerItem}
        >
        <Text style={styles.titre}>Artiste de la semaine</Text>
        <Text>
            {artist.image} - {artist.name}
        </Text>
        </TouchableOpacity>
    </View>
  );
};

export default ArtistItem;
