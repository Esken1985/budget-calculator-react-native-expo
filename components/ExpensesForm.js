import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { add } from "react-native-reanimated";
import Button from "./Button";

const ExpensesForm = ({ addExpense }) => {
  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={{ charge: "", amount: "" }}
        onSubmit={(values) => {
          addExpense(values)
        }}
      >
        {(props) => (
          <View>
            <Text style={styles.label}>Charge</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. rent"
              onChangeText={props.handleChange("charge")}
              value={props.values.charge}
            />
            <Text style={styles.label}>Amount</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. 200"
              onChangeText={props.handleChange("amount")}
              value={props.values.amount}
              keyboardType="numeric"
            />
            <View style={styles.submitBtn} >
              <Button text="submit" onPress={props.handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </View>

    // <View style={styles.formContainer}>
    // </View>
  );
};

const styles = StyleSheet.create({
  label: {
    textTransform: "capitalize",
    color: "#4caf50",
    fontSize: 22,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderColor: "#9e9e9e",
    borderWidth: 1,
    width: 300,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 5,
    height: 50,
    fontSize: 24,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
});

export default ExpensesForm;
