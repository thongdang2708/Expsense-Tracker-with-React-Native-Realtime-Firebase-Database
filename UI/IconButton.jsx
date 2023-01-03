import {View, Pressable, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

function IconButton({name, color, size, onPress}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.buttonPress}>
        <View style={styles.iconContainer}>
            <Ionicons name={name} color={color} size={size}/>
        </View>
    </Pressable>
  )
};

const styles = StyleSheet.create({
    iconContainer: {
        padding: 8,
        bordeRadius: 24,
        marginVertical: 2,
        marginHorizontal: 8
    },
    buttonPressed: {
        opacity: 0.75
    }
});



export default IconButton