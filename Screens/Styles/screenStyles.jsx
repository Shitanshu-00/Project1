import { Dimensions, StyleSheet } from "react-native";

const {height, width} = Dimensions.get('window');

export const AllStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        paddingTop: height*0.05,
        paddingHorizontal: width*0.04
    }
})