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

  const handleCharge = (value) => {
    setCharge(value);
  };
  const handleModalOpening = () => {
    setModalOpen(true);
  };
  const handleModalClosing = () => {
    setModalOpen(false);
  };
  const addExpense = (expense) => {
    expense.key = Math.random().toString();
    setExpenses((currentExpenses) => {
      return [expense, ...currentExpenses];
    });
    setModalOpen(false)
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <Button
          name="close"
          size={28}
          handleModalClosing={handleModalClosing}
        />
        <ExpensesForm addExpense={addExpense}/>
      </Modal>
      <Header />
      <ExpensesList expenses={expenses} />
      <Button text="add new" handleModalOpening={handleModalOpening} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
