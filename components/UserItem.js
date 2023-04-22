import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../theme/styles";

const UserItem = ({ user, playcount, friends, image, navigation }) => {
  return (
    <View style={styles.containerItem}>
      <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/4519/4519678.png" }} style={{ width: 50, height: 50 }} />
      <View style={styles.padding}>
      <Text style={styles.titre}>{user}</Text>
      <Text style={styles.text}>Musique écoutées : {playcount}</Text>
      <Text style={styles.text}>Abonnés : {friends}</Text>
      </View>
    </View>
  );
};

export default UserItem;
