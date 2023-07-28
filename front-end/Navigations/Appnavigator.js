import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "../Screens/AuthScreens/Login";
import Home from "../Screens/MainScreens/Home";
import Register from "../Screens/AuthScreens/Register";
import Profile from "../Screens/MainScreens/Profile";
import LoadingScreen from "../Screens/LoadingScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthNavigator = ({ handleLoginSuccess }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
        initialParams={{ handleLoginSuccess: handleLoginSuccess }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = ({ handleLoggedOut }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
        initialParams={{ handleLoggedOut: handleLoggedOut }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loginStatus = await AsyncStorage.getItem("isLoggedIn");
        setisLoggedIn(loginStatus === "true");
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLoginSuccess = async () => {
    setisLoggedIn(true);
    try {
      await AsyncStorage.setItem("isLoggedIn", "true");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoggedOut = async () => {
    setisLoggedIn(false);
    try {
      await AsyncStorage.setItem("isLoggedIn", "false");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <LoadingScreen/>
  } else {
    return (
      <NavigationContainer>
        {isLoggedIn ? (
          <MainNavigator handleLoggedOut={handleLoggedOut} />
        ) : (
          <AuthNavigator handleLoginSuccess={handleLoginSuccess} />
        )}
      </NavigationContainer>
    );
  }
};

export default AppNavigator;
