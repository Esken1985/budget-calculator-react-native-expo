import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpensesList from './components/ExpensesList';
import Header from './components/Header';


const initialExpenses = [
    { key: 1, charge: "rent", amount: 1600 },
    { key: 2, charge: "car payment", amount: 400 },
    { key: 3, charge: "credit card bill", amount: 1200 },
  ];

export default function App() {
  const [expenses, setExpenses] = useState(initialExpenses)
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
      <ExpensesList expenses={expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
