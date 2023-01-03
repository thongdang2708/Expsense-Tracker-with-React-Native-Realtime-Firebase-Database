import {View, Text, TextInput, StyleSheet} from "react-native";
import GlobalStyles from "../constants/styles";

function Input({label, textInputConfig, style, invalid}) {

    let styleInputArray = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        styleInputArray.push(styles.inputMultiline);
    }; 

    if (invalid) {
        styleInputArray.push(styles.invalidInput);
    }
   
 
  return (
    <View style={[styles.inputContainer, style]}>
        <Text style={[styles.label, invalid && styles.invalidLabel]}> {label} </Text>
        <TextInput style={styleInputArray} {...textInputConfig} />
    </View>
  )
};

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: {
        color: GlobalStyles.colors.primary100,
        fontSize: 12,
        marginBottom: 4
    },
    input: {
        color: GlobalStyles.colors.primary700,
        padding: 6,
        borderRadius: 6,
        backgroundColor: GlobalStyles.colors.primary100,
        fontSize: 18
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: "top"
    },
    invalidLabel: {
        color: GlobalStyles.colors.error500
    },
    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50
    }
    
});

export default Input