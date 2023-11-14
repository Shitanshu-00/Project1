import { Dimensions, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Styles } from '../Styles'
import { Entypo } from "@expo/vector-icons";
import images from '../../constants/images';
import { COLORS } from '../../constants/theme';

const NewsModal = ({ item, index }) => {
    const [visible, setVisible] = useState(true);
    useEffect(() => setVisible(true), []);
    return (
        <Modal transparent visible={visible} onRequestClose={() => setVisible(false)}>
            <View style={{ flex: 1, backgroundColor:COLORS.white }}>
                <View style={{ flex: 0.44, backgroundColor: COLORS.black, borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}>
                    <View style={[Styles.rowView, { paddingHorizontal: width * 0.02, marginBottom: height * 0.02 }]}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <Entypo name="chevron-small-left" size={30} color="white" />
                        </TouchableOpacity>
                        <Text style={[Styles.title, { marginLeft: width * 0.26, fontSize: height * 0.024, marginTop: height * 0.005 }]}>
                            ALL STORIES
                        </Text>
                    </View>
                    <Image source={images.storyImg} resizeMode='contain' style={{ alignSelf: 'center', width: width * 0.9 }} />
                    <View style={{ paddingHorizontal: width * 0.05, marginTop: height * 0.01, borderBottomLeftRadius: 20 }}>
                        <Text style={[Styles.title, { fontSize: height * 0.028 }]}>Harris,Redymayne star in heat’s comfortable win</Text>
                    </View>
                </View>
                <View style={{ flex: 0.4, backgroundColor: COLORS.white, paddingHorizontal: width * 0.04, paddingVertical: height * 0.02 }}>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: height * 0.02 }}>The pair stiched an impressive opening stand of 165 to help brisbane heat down melbourne renegades by 21 runs.</Text>
                    <Text style={{ fontFamily: 'Roboto-Regular', fontSize: height * 0.02 }}>{ }</Text>
                </View>
            </View>
        </Modal>
    )
}

export default NewsModal

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({})