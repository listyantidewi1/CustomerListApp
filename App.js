// App.js
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CustomerListScreen from "./CustomerListScreen";
import CustomerDetailScreen from "./CustomerDetailScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import { Button, Text, View } from "react-native";
import ProfileScreen from "./ProfileScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="CustomerList" component={CustomerListScreen} />
        <Stack.Screen name="CustomerDetail" component={CustomerDetailScreen} />
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
