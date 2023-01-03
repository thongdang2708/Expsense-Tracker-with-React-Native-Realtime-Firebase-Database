import {View, Text, Pressable , StyleSheet} from "react-native";
import GlobalStyles from "../constants/styles";

function Button({children, onPress, mode, style}) {
  return (
    <View style={style}>
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.buttonPressed}>
            <View style={[styles.buttonContainer, mode === "flat" && styles.flat]}>
                <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}> {children} </Text>
            </View>
        </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
   buttonContainer: {
       padding: 5,
       borderRadius: 5,
       backgroundColor: GlobalStyles.colors.primary400
   },
   flat: {
       backgroundColor: GlobalStyles.colors.gray500
   },
   buttonText: {
    color: "white",
    textAlign: "center"
   },
   flatText: {
       color: GlobalStyles.colors.primary200
   },
   buttonPressed: {
       opacity: 0.75,
       backgroundColor: GlobalStyles.colors.gray700,
       borderRadius: 5
   }
});

export default Button