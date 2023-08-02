import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Textinput from "../../Components/Textinput";
import Button from "../../Components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login({ route }) {
  const navigation = useNavigation();

  const { handleLoginSuccess } = route.params;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = async () => {
    if (username.length === 0) {
      Alert.alert("Error", "Please enter a username");
      return;
    } else if (password.length === 0) {
      Alert.alert("Error", "Please enter a password");
      return;
    }

    const loginData = {
      username: username,
    };

    let url_check_login = `https://56b9-2001-ee0-41c1-3ad8-f19d-3d88-ce0f-1a4.ngrok-free.app/api/list`;

    try {
      const response = await fetch(url_check_login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      
      const responseData = await response.json();

      if (responseData.status !== 1) {
        Alert.alert("Error", "Username does not exist");
      } else {
        const objCus = responseData.data[0];

        if (objCus.password !== password) {
          Alert.alert("Error", "Incorrect password");
        } else {
          try {
            await AsyncStorage.setItem("loginInfo", JSON.stringify(objCus));
            handleLoginSuccess(); // Gọi hàm handleLoginSuccess để set isLoggedIn thành true
          } catch (error) {
            console.log(error);
          }
        }
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "An error occurred. Please try again.");
    }
  };

  return (
    <ImageBackground source={require("../../Image/R.jpg")} style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>CASHO</Text>
        </View>
        <Textinput
          onChangeText={setUsername}
          value={username}
          placeholder={"Username"}
        />
        <Textinput
          onChangeText={setPassword}
          value={password}
          placeholder={"Password"}
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.forgotPass}>Quên mật khẩu ?</Text>
        </TouchableOpacity>
        <Button title={"Đăng nhập"} onPress={doLogin} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text>Bạn chưa có tài khoản ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ fontWeight: "bold" }}>Đăng kí</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
