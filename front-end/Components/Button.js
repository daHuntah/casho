import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;                  

const styles = StyleSheet.create({
  button: {
    width: 150,
    alignSelf: 'center',
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    marginLeft: 150,
    marginRight: 150,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
