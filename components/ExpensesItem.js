import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "./Button";

const ExpensesItem = ({ expense }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.expCharge}>{expense.charge}</Text>
      <View>
        <Text style={styles.expAmount}>${expense.amount}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button name="edit" color="#4caf50" size={24} />
        <Button name="delete" color="#d50000" size={24} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 10,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  expCharge: {
    flex: 3,
    marginRight: 40,
    fontSize: 16,
    textTransform: "capitalize",
    fontWeight: "bold",
    color: "#9e9e9e",
    
  },
  expAmount: {
    fontSize: 14,
    backgroundColor: "#d50000",
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 5,
    color: "#fff",
    fontWeight: "bold",
    marginRight: 45,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
});

export default ExpensesItem;
