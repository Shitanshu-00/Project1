import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get('window');

export const modal = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingHorizontal: width*0.04,
        alignItems:'center',
        justifyContent: 'center'
    },
    centerView: {
        backgroundColor: '#fff',
        width: '80%',
        height: height*0.2,
        borderRadius: 20,
        alignItems:'center',
    },
    image:{
        position:'absolute',
        top: -height*0.05
    }
})