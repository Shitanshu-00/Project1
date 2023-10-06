import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants/theme";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
   labelWrapper:{
   },
    label: {
        color: COLORS.red,
        fontFamily: FONTS.Roboto.regular,
    
    },
    input:{
        width: width*0.9,
        borderWidth: 1,
        borderColor: COLORS.grey
    }
})