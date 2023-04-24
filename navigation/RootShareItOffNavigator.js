import React from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfilScreen from "../screens/ProfilScreen";
import ArtistStackNavigator from"./ArtistStackNavigator"
import TchatScreen from "../screens/TchatScreen";
import DescriptionScreen from "../screens/DescriptionScreen";

const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#e41b23" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Icons will be different if the tab is focused
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused
                ? "ios-musical-notes"
                : "ios-musical-notes-outline";
            } else if (route.name === "Profil") {
              iconName = focused ? "ios-person" : "ios-person-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "ios-search" : "ios-search-outline";
            } else if (route.name === "Tchat") {
              iconName = focused
                ? "ios-chatbubbles"
                : "ios-chatbubbles-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#e41b23",
          tabBarInactiveTintColor: "gray",
          headerStyle: {
            backgroundColor: "#e41b23",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search"
          component={ArtistStackNavigator}
          options={{ title: "Recherche" }} />
        <Tab.Screen name="Tchat" component={TchatScreen} />
        <Tab.Screen name="Profil" component={ProfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, paddingBottom: 10 },
});

// Common stack header options
const screenOptions = {
  headerStyle: {
    backgroundColor: "#e41b23",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
