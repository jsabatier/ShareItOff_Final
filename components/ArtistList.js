import React from "react";
import { Text, View, StyleSheet, FlatList ,Image,TouchableOpacity} from "react-native";
import styles from "../theme/styles";
import ArtistItem from "./TrackItem";

const ArtistList = ({ searchResults, navigation }) => {
    const renderSearchResult = ({ item, navigation }) => {
        return (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/2908/2908584.png" }} style={{ width: 50, height: 50, marginRight: 10 }} />
            <TouchableOpacity
            onPress={() => {
              navigation.navigate("DescriptionScreen", {
                artist: item,
              });
            }}>
              <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
              <Text>{item.listeners} écoutes</Text>
            </TouchableOpacity>
          </View>
        );
      };

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
        <FlatList
          data={searchResults}
          renderItem={renderSearchResult}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
  );
};

export default ArtistList;

