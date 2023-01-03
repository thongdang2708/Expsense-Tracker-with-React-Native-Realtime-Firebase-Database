import {View, Text, StyleSheet} from "react-native";
import Button from "../UI/Button";
import { useContext, useLayoutEffect } from "react/cjs/react.development";
import GlobalStyles from "../constants/styles";
import IconButton from "../UI/IconButton";
import ExpenseForm from "../ManageExpense/ExpenseForm";
import { postExpense } from "../utils/http";
import ExpenseContext from "../store/ExpenseContext";
import { putExpense } from "../utils/http";
import { removeExpense } from "../utils/http";
import Loading from "../UI/Loading";
import Error from "../UI/Error";
import { useState } from "react/cjs/react.development";
function ManageExpenses({navigation, route}) {
  
  let ExpenseId = route.params?.expenseId;

  let isEditing = !!ExpenseId;


  let {expenses, addExpense,  deleteExpense,  updateExpense} = useContext(ExpenseContext);
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState();

  let currentExpense = expenses.find((expense) => expense.id === ExpenseId);

  useLayoutEffect(() => {

    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense"
    });


  },[navigation, isEditing]);

  const handleCancel = () => {

    navigation.goBack();
  };

  const handleDelete = () => {
    setIsLoading(true);

    try {
      removeExpense(ExpenseId);
      deleteExpense(ExpenseId);
      navigation.goBack();

    } catch (error) {
      setError("Cannot delete! Please delete again!");
    }

    setIsLoading(false);
  
  };

  const handleAddOrDelete = async (expenseData) => {

    setIsLoading(true);

    try {

      if (isEditing) {
        putExpense(ExpenseId, expenseData);
        updateExpense(ExpenseId, expenseData);
      } else {
        let id = await postExpense(expenseData);
        addExpense(expenseData, id);
      }
      
      navigation.goBack();
    } catch (error) {
      setError("Cannot do anything. Please do again!");
    }

    setIsLoading(false);

  };
  
  if (isLoading) {
    return <Loading />;
  };

  const handleConfirm = () => {

    setError(null);
  };

  if (error && isLoading === false) {
    return <Error message={error} onConfirm={handleConfirm}/>
  }
  

  return (
    <View style={styles.manageExpenseContainer}>
     
      <ExpenseForm submitLabel={isEditing ? "Edit Expense" : "Add Expense"} onCancel={handleCancel} defaultValue={currentExpense} onSubmit={handleAddOrDelete}/>
      

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton name="trash" color={GlobalStyles.colors.error500} size={36} onPress={handleDelete}/>
        </View>
      )}
    
    </View>
  )
};

const styles = StyleSheet.create({
    manageExpenseContainer: {
      padding: 10,
      flex: 1,
      backgroundColor: GlobalStyles.colors.primary700
    },
    deleteContainer: {
      paddingTop: 5,
      marginTop: 10,
      borderTopWidth: 2,
      borderTopColor: GlobalStyles.colors.error500,
      alignItems: "center"
    },
    buttonsContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    styleForButton: {
      minWidth: 120,
      marginHorizontal: 10
    }
});

export default ManageExpenses