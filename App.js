import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { add } from "react-native-reanimated";
import Button from "./components/Button";
import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";
import Header from "./components/Header";

const initialExpenses = [
  { key: 1, charge: "rent", amount: 1600 },
  { key: 2, charge: "car payment", amount: 400 },
  { key: 3, charge: "credit card bill", amount: 1200 },
];

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");

  const total = expenses.reduce((acc, curr) => {
    return (acc += parseInt(curr.amount));
  }, 0);

  const handleModalOpening = () => {
    setModalOpen(true);
  };
  const handleModalClosing = () => {
    setModalOpen(false);
  };
  const addExpense = (expense) => {
    expense.key = Math.random().toString();
    setExpenses((currentExpenses) => {
      return [...currentExpenses, expense];
    });
    setModalOpen(false);
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <Button
          name="close"
          size={28}
          handleModalClosing={handleModalClosing}
        />
        <ExpensesForm addExpense={addExpense} />
      </Modal>
      <Header />
      <ExpensesList expenses={expenses} />
      <Button text="add new" handleModalOpening={handleModalOpening} />
      <View>
        <Text style={styles.totalExpenses}>
          Total Expenses : ${total}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  totalExpenses: {
    backgroundColor: "#d50000",
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 5,
    color: "#fff",
    fontWeight: "bold",
    width: 300,
    alignSelf: "center",
    borderRadius: 15,
    height: 50,
    marginTop: 20,
    textAlignVertical: "center",
    paddingLeft: 10,
    fontSize: 24,
    textAlign: "center"
  },
  total: {
    marginLeft: 20
  },
});
