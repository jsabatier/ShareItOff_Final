import React from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>This is the home screen</Text>
            <Button
                title="Go to profil"
                onPress={() => navigation.navigate("Profil")}
            />
        </View>
    );
};

const ProfilScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>This is the profil screen</Text>
        <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
      </View>
    );
};

const SearchScreen = () => {
return (
    <View style={styles.container}>
        <Text style={styles.text}>This is the search screen</Text>
    </View>
    );
};

const TchatScreen = () => {
return (
    <View style={styles.container}>
        <Text style={styles.text}>This is the tchat</Text>
    </View>
    );
};


const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#f4511e" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Icons will be different if the tab is focused
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused
                ? "ios-wine"
                : "ios-wine-outline";
            } 
            else if (route.name === "Profil") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profil" component={ProfilScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Tchat" component={TchatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: {fontSize:18,paddingBottom:10},
});

// Common stack header options
const screenOptions = {
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};