import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Styles";
import RoundedAvatar from "../../Components/RoundedAvatar";

export default function Home({navigation}) {
  return (
    <View>
      <SafeAreaView>
        <TouchableOpacity onPress={() => {navigation.navigate('Profile')}}>
          <RoundedAvatar
            avtContainer={styles.avtContainer}
            avatar={styles.avatar}
            avtImage={styles.avtImage}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
