import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DescriptionScreen from "../screens/DescriptionScreen";
import SearchScreen from "../screens/SearchScreen";
import { screenOptions } from "../theme/styles";

// Screen stack for Joueurs tab
const ArtistStack = createNativeStackNavigator();

const ArtistStackNavigator = () => {
  return (
    <ArtistStack.Navigator
      initialRouteName="Search"
      screenOptions={{ screenOptions, headerShown: false }}
    >
      <ArtistStack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Joueurs" }}
      />
      <ArtistStack.Screen
        name="Description"
        component={DescriptionScreen}
      />
    </ArtistStack.Navigator>
  );
};

export default ArtistStackNavigator;