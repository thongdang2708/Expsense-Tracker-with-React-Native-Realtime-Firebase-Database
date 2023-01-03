
import {View, Text, ActivityIndicator, StyleSheet} from "react-native";
import GlobalStyles from "../constants/styles";

function Loading() {
  return (
    <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={"white"}/>
    </View>
  )
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
});

export default Loading