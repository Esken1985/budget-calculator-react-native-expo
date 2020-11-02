import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import ExpensesItem from "./ExpensesItem";

const ExpensesList = ({ expenses }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>My Recent Expenses</Text>
      </View>
      <FlatList
        data={expenses}
        renderItem={({ item }) => <ExpensesItem expense={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
      fontSize: 24,
      color: "#f15025",
      fontWeight: "bold",
      
  }
});

export default ExpensesList;
