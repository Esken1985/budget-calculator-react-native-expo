import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Button = ({ name, color, size, text, handleModalOpening, handleModalClosing }) => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        {text ? (
          <Text style={styles.btnText} onPress={handleModalOpening} >{text}</Text>
        ) : (
          <Icon name={name} color={color} size={size} onPress={handleModalClosing} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 5
  },
  btnText: {
    textTransform: "capitalize",
    fontSize: 24,
    backgroundColor: "#f15025",
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 15,
    color: "#fff",
    fontWeight: "bold",
    width: 200, 
    height: 50,
    marginTop: 20,
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
  },
});

export default Button;
