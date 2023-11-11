import { View, Text, FlatList, TouchableOpacity, Dimensions, Animated } from 'react-native'
import React, { useRef } from 'react'
import { Styles } from '../Components/Styles';
import { Entypo } from "@expo/vector-icons";
import { COLORS } from '../constants/theme';
import { PanGestureHandler, Swipeable } from 'react-native-gesture-handler';


const notification = [{ 'title': 'Notification 1', 'body': 'This is a notification' }, { 'title': 'Notification 2', 'body': 'This is a notification' }, { 'title': 'Notification 3', 'body': 'This is a notification' }]

const Notification = (props) => {

    const translateX = useRef(new Animated.Value(0)).current;

    const leftSwipe = Animated.event(
        [{
            nativeEvent: {
                translationX: translateX
            }
        }],
        { useNativeDriver: true }
    )


    return (
        <View style={Styles.container}>
            <View style={[Styles.rowView, { paddingHorizontal: width * 0.02, marginBottom: height * 0.01 }]}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Entypo name="chevron-small-left" size={30} color="white" />
                </TouchableOpacity>
                <Text style={[Styles.title, { marginLeft: width * 0.26, fontSize: height * 0.026, marginTop: height * 0.005 }]}>
                    Notification
                </Text>
            </View>
            <FlatList
                data={notification}
                renderItem={({ item, index }) => {
                    return (
                        // <Swipeable renderLeftActions={leftSwipe}>
                        <PanGestureHandler onGestureEvent={leftSwipe}>
                            <Animated.View style={{
                                backgroundColor: COLORS.white, marginTop: height * 0.01, width: width * 0.9, alignSelf: 'center', paddingHorizontal: width * 0.02, borderRadius: 5, paddingVertical: height * 0.01, transform: [{ translateX: translateX }]
                            }}>
                                <Text onPress={()=>console.log("Value")}>{item.title}</Text>
                                <Text style={{ color: COLORS.grey }}>{item.body}</Text>
                            </Animated.View>
                        </PanGestureHandler>
                        // </Swipeable>
                    )
                }}
            />
        </View>
    )
}

export default Notification

const { height, width } = Dimensions.get('window');