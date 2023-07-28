import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile({ route }) {
  const [userdata, setuserdata] = useState([]);

  const { handleLoggedOut } = route.params;

  const onLogOut = async () => {
    handleLoggedOut();
  };

  const getInfo = async (req, res, next) => {
    try {
      const userInfo = await AsyncStorage.getItem("loginInfo");
      if (userInfo) {
        const userData = JSON.parse(userInfo);
        setuserdata(userData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={{ fontSize: 15, alignSelf: 'center' }}>
            Chào mừng quay trở lại
          </Text>
        </View>
        <View style={{ flex: 1, borderBottomWidth: 2 }}>
          <Text style={styles.usernameText}>{userdata.username}</Text>
        </View>
      </View>
      <View style={{ flex: 4 }}></View>
      <Button title="Logout" onPress={onLogOut} />
    </SafeAreaView>
  );
}
