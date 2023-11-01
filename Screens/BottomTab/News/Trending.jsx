import { View, Text, Dimensions, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { bottomStyles } from '../Styles.BottomTab';
import Database from '../../../Utils/db.json';
import images from '../../../constants/images';

const Trending = () => {
    return (
        <ScrollView style={bottomStyles.container}>
            <View style={{ height: height }}>
                <FlatList
                    data={Database.news[0].stories}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={{ marginVertical: height * 0.02, paddingHorizontal: width * 0.04 }}>
                                <View style={bottomStyles.rowView}>
                                    <Image source={images.Story} />
                                    <View style={{ flex: 1, marginLeft: width * 0.02 }}>
                                        <Text style={{ fontSize: height * 0.02, fontWeight: '600', flexWrap: 'wrap' }}>{item.headline}</Text>
                                        <Text style={{ fontSize: height * 0.014 }}>{item.time}</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: height * 0.016, marginTop: height * 0.01 }}>{item.leadPara}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </ScrollView>
    )
}

export default Trending

const { height, width } = Dimensions.get('window');