import {View, Text, StyleSheet} from "react-native";
import GlobalStyles from "../constants/styles";

function ExpenseSummary({expense, expensePeriod}) {
    
    let totalAmount = expense.reduce((acc, element) => {
        return acc + element.amount;
    }, 0);

  return (
    <View style={styles.summaryContainer}>
        <Text style={styles.period}> {expensePeriod} </Text>
        <Text style={styles.amount}> ${totalAmount.toFixed(2)} </Text>
    </View>
  )
};

const styles = StyleSheet.create({
    summaryContainer: {
        padding: 10,
        backgroundColor: GlobalStyles.colors.primary200,
        borderRadius: 4,
        marginVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    period: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black"
    },
    amount: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black"
    }
});

export default ExpenseSummary