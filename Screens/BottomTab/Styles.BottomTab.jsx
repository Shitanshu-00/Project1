import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const {height, width} = Dimensions.get("window");

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fantacyLogo: {
        backgroundColor: COLORS.red,
        height: SIZES.xxL,
        width: width*0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 50,
        borderBottomRightRadius: 50,
    }, 
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    header:{
        flex: 0.1,
        backgroundColor: '#010',
        justifyContent: 'space-between',
        paddingHorizontal: width*0.02,
        alignItems:'center',
        marginTop: height*0.024
    },
    title_sm: {
        color: '#fff',
        fontSize:height*0.014,
        marginBottom:-15,
    },
    line: {
        borderWidth: 0.5,
        borderColor: '#fff',
        marginVertical: height*0.02
    }
})