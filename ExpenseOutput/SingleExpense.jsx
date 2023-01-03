import {View, Text, Pressable, StyleSheet} from "react-native";
import GlobalStyles from "../constants/styles";
import { returnDate } from "../utils/date";

function SingleExpense({id, description, amount, date, onPress}) {
  return (
    <Pressable style={({pressed}) => pressed && pressed.buttonPressed} onPress={onPress}>
        <View key={id} style={styles.container}>
            <View>
                <Text style={[styles.textBase, styles.description]}> {description}</Text>
                <Text style={styles.textBase}> {returnDate(date)} </Text>
            </View>

            <View style={styles.amountContainer}>
                <Text style={styles.amount}> {amount} </Text>
            </View>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 8,
        borderRadius: 4,
        backgroundColor: GlobalStyles.colors.primary200,
        elevation: 4,
        shadowColor: GlobalStyles.colors.gray500,
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 4,
        shadowOpacity: 0.5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textBase: {
        color: "black"
    },
    description: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 16
    },
    date: {
        fontSize: 12
    },
    amountContainer: {
        padding: 5,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4
    },
    amount: {
        fontWeight: "bold"
    },
    buttonPressed: {
        opacity: 0.75
    }

});

export default SingleExpense