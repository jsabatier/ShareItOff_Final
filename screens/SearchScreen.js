import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, Image,TouchableOpacity} from 'react-native';
import styles from "../theme/styles";
import ArtistList from "../components/ArtistList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    if (searchTerm !== '') {
      const apiKey = "83920c6715670d2cf5294347ca609ba1";
      const url = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchTerm}&api_key=${apiKey}&format=json`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        const searchResults = data.results.artistmatches.artist;
        setSearchResults(searchResults);
      } catch (error) {
        console.error(error);
      }
    }
  };

  

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Cherche un artist..."
        style={{ marginBottom: 10, padding: 10, backgroundColor: '#f2f2f2' }}
      />
      <Button
        title="Chercher"
        onPress={handleSearch}
      />
      <View style={{ flex: 1, marginTop: 20 }}>
        <ArtistList
        searchResults={searchResults}/>
      </View>
    </View>
  );
};

export default SearchScreen;
