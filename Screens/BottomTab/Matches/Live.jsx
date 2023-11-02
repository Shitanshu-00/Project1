import { View, Text, ScrollView, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../../constants/theme';
import Database from "../../../Utils/db.json";
import { bottomStyles } from '../Styles.BottomTab';
import { Styles } from '../../../Components/Styles';
import icons from '../../../constants/icons';

const Live = () => {

    const BottomFlatlist = () => {
        return (
            <View>
                {/* <<-------------------------- East Asia-Pacific Matches --------------------------->> */}
                <View style={{ backgroundColor: COLORS.red, marginVertical: height * 0.01, height: height * 0.05, paddingLeft: width * 0.04, justifyContent: 'center' }}>
                    <Text style={{ color: "#fff", fontSize: height * 0.02 }}>ICC MENS T20 WORLD CUP EAST ASIA PACIFIC ...</Text>
                </View>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={Database.matches[0]['T20 WC East Asia Pacific']}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={[bottomStyles.ScrollSm, { width: width * 0.9, marginBottom: height * 0.025, paddingLeft: width * 0.04, height: height * 0.15, marginHorizontal: width * 0.04 }]}>
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
                                    <Image source={icons.flag_IN} style={{ marginRight: width * 0.02 }} />
                                    <Text style={{ color: "#fff", fontSize: height * 0.016 }}>
                                        {item.country1.name}
                                    </Text>
                                    <Text style={{ color: "#fff", fontSize: height * 0.016, position: "absolute", right: width * 0.04 }}>
                                        *{item.country1.runs}/{item.country1.wickets}(
                                        {item.country1.overs}ov)
                                    </Text>
                                </View>
                                <View style={[bottomStyles.rowView, { marginVertical: height * 0.01 }]}>
                                    <Image
                                        source={icons.flag_SA}
                                        style={{ marginRight: width * 0.02 }}
                                    />
                                    <Text style={{ color: "#fff", fontSize: height * 0.016 }}>
                                        {item.country2.name}
                                    </Text>
                                    <Text style={{ color: "#fff", fontSize: height * 0.016, position: "absolute", right: width * 0.04 }}>
                                        *{item.country2.runs}/{item.country2.wickets}(
                                        {item.country2.overs}ov)
                                    </Text>
                                </View>


                                <Text style={{ color: item.status === "LIVE" ? COLORS.red : "#00920F", fontSize: height * 0.016, textAlign: 'center' }}>
                                    {item.highlight}
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
                data={Database.matches[0]["ICC World Cup 2022"]}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={[bottomStyles.ScrollSm, { width: width * 0.9, marginBottom: height * 0.025, paddingLeft: width * 0.04, height: height * 0.15, marginHorizontal: width * 0.04 }]}>
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
                                <Image source={icons.flag_IN} style={{ marginRight: width * 0.02 }} />
                                <Text style={{ color: "#fff", fontSize: height * 0.016 }}>
                                    {item.country1.name}
                                </Text>
                                <Text style={{ color: "#fff", fontSize: height * 0.016, position: "absolute", right: width * 0.04 }}>
                                    *{item.country1.runs}/{item.country1.wickets}(
                                    {item.country1.overs}ov)
                                </Text>
                            </View>
                            <View style={[bottomStyles.rowView, { marginVertical: height * 0.01 }]}>
                                <Image
                                    source={icons.flag_SA}
                                    style={{ marginRight: width * 0.02 }}
                                />
                                <Text style={{ color: "#fff", fontSize: height * 0.016 }}>
                                    {item.country2.name}
                                </Text>
                                <Text style={{ color: "#fff", fontSize: height * 0.016, position: "absolute", right: width * 0.04 }}>
                                    *{item.country2.runs}/{item.country2.wickets}(
                                    {item.country2.overs}ov)
                                </Text>
                            </View>


                            <Text style={{ color: item.status === "LIVE" ? COLORS.red : "#00920F", fontSize: height * 0.016, textAlign: 'center' }}>
                                {item.highlight}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
                ListFooterComponent={<BottomFlatlist />}
            />

        </View >

    )
}

export default Live

const { height, width } = Dimensions.get('window')