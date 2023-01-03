import {View, Text, StyleSheet} from "react-native";
import GlobalStyles from "../constants/styles";
import Button from "./Button";

function Error({message, onConfirm}) {
  return (
    <View style={styles.errorContainer}>
        <Text style={[styles.text, styles.title]}> Error...! </Text>
        <Text style={styles.text}> {message}</Text>
        <Button onPress={onConfirm}> Okay! </Button>
    </View>
  )
};

const styles = StyleSheet.create({
    errorContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    },
    text: {
        color: "white",
        textAlign: "center",
        marginBottom: 8
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default Error