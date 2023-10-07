import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../constants/theme";

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
   labelWrapper:{
    alignItems:'flex-start',
    marginLeft: width*0.04
   },
    label: {
        color: COLORS.red,
        fontFamily: FONTS.Roboto.regular,
    
    },
    input:{
        width: '100%',
        height: height*0.05,
        borderWidth: 1,
        borderColor: COLORS.grey,
        borderRadius: 20,
        paddingHorizontal: width*0.04,
        color: '#fff'
    }
})