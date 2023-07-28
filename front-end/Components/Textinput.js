import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Textinput = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.textip}
      values={value}
      onChangeText={onChangeText}
    />
  );
};

export default Textinput;

const styles = StyleSheet.create({
  textip: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    color: "#000000",
  },
});
