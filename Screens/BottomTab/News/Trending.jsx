import { View, Text, Dimensions, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { bottomStyles } from '../Styles.BottomTab';
import Database from '../../../Utils/db.json';
import images from '../../../constants/images';

const Trending = () => {
    return (
        <View style={bottomStyles.container}>
            <FlatList
                data={Database.news[0].stories}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={{ marginVertical: height * 0.01, borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.1)', marginHorizontal: width * 0.04 }}>
                            <View style={bottomStyles.rowView}>
                                <Image source={images.Story} />
                                <View style={{ flex: 1, marginLeft: width * 0.02 }}>
                                    <Text style={{ fontSize: height * 0.022, fontFamily: 'Roboto-Bold', flexWrap: 'wrap' }}>{item.headline}</Text>
                                    <Text style={{ fontSize: height * 0.014, fontFamily: 'Roboto-Regular' }}>{item.time}</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: height * 0.018, marginTop: height * 0.01, marginBottom: height * 0.01, fontFamily: 'Roboto-Regular' }}>{item.leadPara}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Trending

const { height, width } = Dimensions.get('window');