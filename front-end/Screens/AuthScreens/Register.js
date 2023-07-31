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

export default function Register() {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setaddress] = useState("");
  const [phonenumber, setphonenumber] = useState(0);

  const doRegister = async () => {
    if (username.length === 0) {
      Alert.alert("Error", "Hãy nhập username");
      return;
    } else if (password.length === 0) {
      Alert.alert("Error", "Hãy nhập password");
      return;
    } else if (address.length === 0) {
      Alert.alert("Error", "Hãy nhập địa chỉ");
      return;
    } else if (phonenumber.length === 0) {
      Alert.alert("Error", "Hãy nhập số điện thoại");
      return;
    }

    const loginData = {username: username}

    let url_check_register =
      `https://61ba-2001-ee0-41c1-3ad8-1ca3-c91a-c5e-771.ngrok-free.app/api/list`;

    try {
      const response = await fetch(url_check_register, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      });

      const responseData = await response.json();

      if (responseData.status === 1) {
        Alert.alert("Error", "Username đã tồn tại");
      } else {
        const objCus = { username, password, address, phonenumber }; // Tạo đối tượng khách hàng mới

        let url_api =
          "https://61ba-2001-ee0-41c1-3ad8-1ca3-c91a-c5e-771.ngrok-free.app/api/reg";

        // Gửi yêu cầu POST để đăng kí khách hàng mới
        const registerResponse = await fetch(url_api, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(objCus),
        });

        const registerData = await registerResponse.json();

        if (registerData.status !== 1) {
          Alert.alert(
            "Error",
            "Đăng kí chưa thành công"
          );
        } else {
          navigation.navigate("Login");
          Alert.alert("Success", "Đăng kí thành công");
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
          <Text style={styles.titleText}>CAS</Text>
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
        <Textinput
          onChangeText={setaddress}
          value={address}
          placeholder={"Địa chỉ"}
        />
        <Textinput
          onChangeText={setphonenumber}
          value={phonenumber}
          placeholder={"Số điện thoại"}
        />
        <Button title={"Đăng kí"} onPress={doRegister} />
      </SafeAreaView>
    </ImageBackground>
  );
}
