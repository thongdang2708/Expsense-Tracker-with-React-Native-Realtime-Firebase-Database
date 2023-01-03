import {View, Text, StyleSheet} from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";
import mockData from "../data/mockdata";
import GlobalStyles from "../constants/styles";
function ExpenseOverview({expenses, expensePeriod, fallBackText}) {

  let content = (<Text style={styles.fallBackTitle}> {fallBackText}</Text>)

  if (expenses.length > 0) {
    content = (<ExpenseList expense={expenses}/>);
  }
  return (
    <View style={styles.overviewContainer}>
        <ExpenseSummary expense={expenses} expensePeriod={expensePeriod}/>
        {content}
    </View>
  )
};

const styles = StyleSheet.create({
    overviewContainer: {
        padding: 15,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1
    },
    titleText: {
      fontSize: 36,
      fontWeight: "bold",
      color: GlobalStyles.colors.error500,
      textAlign: "center",
      marginTop: 10
    },
    fallBackTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: GlobalStyles.colors.error500,
      textAlign: "center"
     }
   
});

export default ExpenseOverview