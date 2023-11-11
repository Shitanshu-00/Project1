import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const {height, width} = Dimensions.get("window");

export const bottomStyles = StyleSheet.create({
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
        height: height*0.08,
        backgroundColor: '#010',
        justifyContent: 'space-between',
        paddingHorizontal: width*0.02,
        alignItems:'center',
    },
    title_sm: {
        color: '#fff',
        fontSize:height*0.014,
        marginBottom:-15,
        fontFamily:'Roboto-Regular'
    },
    line: {
        borderWidth: 1,
        borderColor: COLORS.red,
        marginVertical: height*0.02
    },
    ScrollSm:{
        backgroundColor: COLORS.black,
        width: width*0.6,
        marginRight: width*0.05,
        borderRadius: 16,
        paddingVertical: height*0.014,
        elevation:5,
        paddingLeft: width*0.02
    },
    LiveView:{
        backgroundColor: COLORS.red,
        width: width*0.14,
        alignItems:'center',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        position:'absolute',
        right:0
    },
    NavView:{
        height: height*0.05,
        width: width*0.33,
        alignItems:'center',
        justifyContent:'center'
    }
})