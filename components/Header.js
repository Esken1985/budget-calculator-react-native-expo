import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Icon name="menu" style={styles.menuIcon} />
      <Text style={styles.headerText}>Budget Calculator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#f15025",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },
  headerText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  menuIcon: {
    fontSize: 48,
    color: "#fff",
    position: "absolute",
    left: 16,
  },
});

export default Header;
