import { StatusBar } from "expo-status-bar";
import React from "react";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/view/HomeScreen";
import Colors from "./src/view/color";
import Details from "./src/view/DetailScreen";
import ListBird from "./src/view/ListBird";
import LoginSells from "./src/view/LoginSells";
import ProfileSelles from "./src/view/ProfileSelles";
import SellsLogin from "./src/view/SellsLogin";
const Stack = createStackNavigator();

const App = () => {
  return (
    /* <ProfileSelles />

    <NavigationContainer>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="ListBird" component={ListBird} />
      </Stack.Navigator>
    </NavigationContainer>*/

    <SellsLogin />
  );
};

export default App;
