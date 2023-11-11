import { View, Text, ScrollView, Dimensions, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import icons from '../../../constants/icons';
import { bottomStyles } from '../Styles.BottomTab';
import { Styles } from '../../../Components/Styles';
import Database from '../../../Utils/db.json';
import { COLORS } from '../../../constants/theme';

const Upcoming = () => {

    const BottomFlatlist = () => {
        return (
                <View style={{ marginBottom: height * 0.02 }}>
                    <Text style={[Styles.title, { color: "#010", fontWeight: "800", paddingLeft: width * 0.04 }]}>
                        LEAGUE
                    </Text>
                    <View style={{ backgroundColor: COLORS.red, marginVertical: height * 0.01, height: height * 0.05, paddingLeft: width * 0.04, justifyContent: 'center' }}>
                        <Text style={{ color: "#fff", fontSize: height * 0.02 }}>CSA T20 CHALLENGE</Text>
                    </View>

                    {/* <<-------------------------- League Matches --------------------------->> */}
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={Database.matches[0].upcoming}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity style={[bottomStyles.ScrollSm, { width: width * 0.92, marginBottom: height * 0.025, paddingLeft: width * 0.04, height: height * 0.1, marginHorizontal: width*0.04 }]}>
                                        <View style={[bottomStyles.rowView, { marginBottom: height * 0.01, justifyContent: 'space-between', paddingRight: width * 0.04 }]}>
                                            <Text style={{ color: "#fff", fontSize: height * 0.014 }}>
                                                {item.match} Match
                                            </Text>
                                            <Text style={{ color: "#fff", fontSize: height * 0.014 }}>
                                                {item.group}
                                            </Text>
                                            <Text style={{ color: "#fff", fontSize: height * 0.014 }}>
                                                {item.venue}
                                            </Text>
                                        </View>

                                        <View style={bottomStyles.rowView}>
                                            <Image source={icons.sriLanka} style={{ marginRight: width * 0.02 }} />
                                            <Text style={{ color: "#fff", fontSize: height * 0.016 }}>
                                                {item.country1.name}
                                            </Text>
                                            <Image source={icons.netherlands} style={{ height: height * 0.025, width: height * 0.025, position: "absolute", right: width * 0.12 }} />
                                            <Text style={{ color: "#fff", fontSize: height * 0.016, position: "absolute", right: width * 0.04 }}>
                                                {item.country2.name}
                                            </Text>
                                        </View>
                                        <Text style={{ color: COLORS.red, fontSize: height * 0.016, textAlign: 'center' }}>
                                            {item.timing}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
        )
    }

    return (
        <View style={bottomStyles.container}>
                <Text style={[Styles.title, { color: "#010", fontWeight: "800", paddingLeft: width * 0.04, marginTop: height*0.01 }]}>
                    INTERNATIONAL
                </Text>
                <View style={{ backgroundColor: COLORS.red, marginVertical: height * 0.01, height: height * 0.05, paddingLeft: width * 0.04, justifyContent: 'center' }}>
                    <Text style={{ color: "#fff", fontSize: height * 0.02 }}>ICC MENS T20 WORLD CUP 2022</Text>
                </View>

                {/* <<-------------------------- International Matches --------------------------->> */}
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={Database.matches[0].upcoming}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={[bottomStyles.ScrollSm, { width: width * 0.92, marginBottom: height * 0.025, paddingLeft: width * 0.04, height: height * 0.1, marginHorizontal: width*0.04 }]}>
                                    <View style={[bottomStyles.rowView, { marginBottom: height * 0.01, justifyContent: 'space-between', paddingRight: width * 0.04 }]}>
                                        <Text style={{ color: "#fff", fontSize: height * 0.014 }}>
                                            {item.match} Match
                                        </Text>
                                        <Text style={{ color: "#fff", fontSize: height * 0.014 }}>
                                            {item.group}
                                        </Text>
                                        <Text style={{ color: "#fff", fontSize: height * 0.014 }}>
                                            {item.venue}
                                        </Text>
                                    </View>

                                    <View style={bottomStyles.rowView}>
                                        <Image source={icons.sriLanka} style={{ marginRight: width * 0.02 }} />
                                        <Text style={{ color: "#fff", fontSize: height * 0.016 }}>
                                            {item.country1.name}
                                        </Text>
                                        <Image source={icons.netherlands} style={{ height: height * 0.025, width: height * 0.025, position: "absolute", right: width * 0.12 }} />
                                        <Text style={{ color: "#fff", fontSize: height * 0.016, position: "absolute", right: width * 0.04 }}>
                                            {item.country2.name}
                                        </Text>
                                    </View>
                                    <Text style={{ color: COLORS.red, fontSize: height * 0.016, textAlign: 'center' }}>
                                        {item.timing}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }}
                        ListFooterComponent={<BottomFlatlist/>}
                    />
            </View>

    )
}

export default Upcoming

const { height, width } = Dimensions.get('window');