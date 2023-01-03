import {View, Text, StyleSheet} from "react-native";
import Input from "./Input";
import { useState } from "react/cjs/react.development";
import Button from "../UI/Button";
import GlobalStyles from "../constants/styles";

function ExpenseForm({submitLabel, onCancel, defaultValue, onSubmit}) {

    let [currentInputValues, setCurrentInputValues] = useState({
        amount: {value: defaultValue ? defaultValue.amount.toString() : "", isValid: true},
        date: {value: defaultValue ? defaultValue.date.toISOString().slice(0, 10) : "", isValid: true},
        description: {value: defaultValue ? defaultValue.description : "", isValid: true}
    });

    const handleChange = (keyIdentifier, enteredValue) => {

        setCurrentInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [keyIdentifier]: {value: enteredValue, isValid: true}
            }
        })
    };

    const handleSubmit = () => {

        let expenseData = {
            amount: +currentInputValues.amount.value,
            date: new Date(currentInputValues.date.value),
            description: currentInputValues.description.value
        };

        let amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        let dateIsValid = expenseData.date.toString() !== "Invalid Date";
        let descriptionIsValid = expenseData.description.trim().length > 0;

        if (amountIsValid === false || dateIsValid === false || descriptionIsValid === false) {

            setCurrentInputValues((currentInputValues) => {
                return {
                    amount: {value: currentInputValues.amount.value, isValid: amountIsValid},
                    date: {value: currentInputValues.date.value, isValid: dateIsValid},
                    description: {value: currentInputValues.description.value, isValid: descriptionIsValid}
                }
            });


            return;
        }

        onSubmit(expenseData);

    };


    let formIsValid = currentInputValues.amount.isValid === false || currentInputValues.date.isValid === false || currentInputValues.description.isValid === false;

  return (
    <View style={styles.form}>
        <Text style={styles.title}> Your Expense </Text>
        <View style={styles.rowContainer}>
       <Input invalid={currentInputValues.amount.isValid === false} style={styles.rowInput} label={"Amount"} textInputConfig={{
           keyboardType: "decimal-pad",
           value: currentInputValues.amount.value,
           onChangeText: (enteredValue) => handleChange("amount", enteredValue) 
          
       }}/>
        <Input invalid={currentInputValues.date.isValid === false} style={styles.rowInput} label={"Date"} textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: currentInputValues.date.value,
            onChangeText: (enteredValue) => handleChange("date", enteredValue)
        }}/>
        </View>
        <Input invalid={currentInputValues.description.isValid === false} label={"Description"} textInputConfig={{
            multiline: true,
            value: currentInputValues.description.value,
            onChangeText: (enteredValue) => handleChange("description", enteredValue)
        }}/>

        {formIsValid && (
            <Text style={styles.errorTitle}> Invalid inputs - Please add again! </Text>
        )} 

        <View style={styles.buttonContainer}>
            <Button mode="flat" style={styles.button} onPress={onCancel}> Cancel </Button>
            <Button style={styles.button} onPress={handleSubmit}> {submitLabel}</Button>
        </View>

        

    </View>
  )
};

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rowInput: {
        flex: 1
    },
    title: {
        fontSize: 20,
        color: "white",
        marginVertical: 24,
        textAlign: "center",
        fontWeight: "bold"
    },
    form: {
        marginTop: 40
    },
    
    errorTitle: {
        color: GlobalStyles.colors.error500,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin: 8
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }, 
    button: {
        minWidth: 120,
        marginHorizontal: 24
    }
});

export default ExpenseForm