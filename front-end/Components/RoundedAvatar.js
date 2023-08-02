import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const RoundedAvatar = ({avtContainer, avatar, avtImage}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={avtContainer}>
        <View style={avatar}>
          <Image
            style={avtImage}
            source={{
              uri: "https://th.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default RoundedAvatar