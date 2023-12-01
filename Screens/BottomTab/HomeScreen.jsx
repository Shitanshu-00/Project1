import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  Modal,
  StyleSheet,
  TextInput
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { bottomStyles } from "./Styles.BottomTab";
import images from "../../constants/images";
import icons from "../../constants/icons";
import auth from "@react-native-firebase/auth";
import { Styles } from "../../Components/Styles";
import Database from "../../Utils/db.json";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import Share from 'react-native-share';
import { StatusBar } from "expo-status-bar";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import firestore from "@react-native-firebase/firestore";


const HomeScreen = (props) => {
  const [name, setName] = useState("Guest");
  const [newsTab, setNewsTab] = useState(false);
  const [videoTab, setVideoTab] = useState(false);
  const trending = Database.trending;
  const [orientationLandscape, setOrientation] = useState(true);
  const videoRef = useRef(null);
  const [Status, setStatus] = useState({});

  // Search bar Animation 
  const animation = useSharedValue(0);
  const [value, setValue] = useState(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animation.value == 1 ? withTiming(width * 0.5, { duration: 500 }) : withTiming(0, { duration: 500 })
    };
  });

  useEffect(() => {
    getValue();
  }, []);

  const getValue = async () => {
    const userData = (await firestore().collection("users").doc(`${auth().currentUser.uid}`).get()).data();
    if(userData || auth().currentUser){
      if (userData.name || auth().currentUser.displayName) {
        setName(userData.name || auth().currentUser.displayName);
      }
    }
  };

  return (
    <SafeAreaView style={bottomStyles.container}>
      {/*<<--------------------Header-------------------->> */}
      <View style={[bottomStyles.rowView, bottomStyles.header]}>
        <View style={{ marginLeft: 12 }}>
          <Image source={images.Logo_sm} />
        </View>
        <View style={[bottomStyles.rowView, { gap: 20 }]}>
          <Animated.View style={[{ width: width * 0.5, backgroundColor: value == 0 ? '#010' : '#e7e7e7', height: height * 0.04, borderRadius: 3, flexDirection: 'row', alignItems: 'center', paddingHorizontal: width * 0.02 }, animatedStyle]}>
            <TextInput style={{ width: '90%' }} placeholder="Search here..." />
            <TouchableOpacity onPress={() => {
              if (animation.value == 0) {
                animation.value = 1;
                setValue(1);
              } else {
                animation.value = 0;
                setValue(0);
              }
            }}>
              <Image source={value == 0 ? icons.search : icons.cross} resizeMode='contain' style={{ tintColor: COLORS.red, height: height * 0.02, width: height * 0.02 }} />

            </TouchableOpacity>
          </Animated.View>
          <TouchableOpacity onPress={() => props.navigation.navigate('Notification')}>
            <Image source={icons.notification_bell} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => props.navigation.navigate("Profile")}>
            <Image source={icons.Profile_Sm} resizeMode="contain" style={{ width: height * 0.042, height: height * 0.042 }} />
            <Text style={[bottomStyles.title_sm, { fontFamily: 'Poppins-Medium' }]}>
              {name.length > 10 ? name.substring(0, 10) + ".." : name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <<-------------------------- Matches --------------------------->> */}
      <ScrollView>
        <View style={{ marginTop: height * 0.01, paddingLeft: width * 0.04, marginBottom: height * 0.02 }}>
          <Text style={Styles.popTitle}>
            Matches
          </Text>
          <View style={{ height: height * 0.2 }}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={Database.matches[0]["ICC World Cup 2022"]}
              renderItem={({ item, index }) => {
                return (
                  <View style={bottomStyles.ScrollSm}>
                    <View style={bottomStyles.rowView}>
                      <MaterialCommunityIcons name="cricket" size={20} color="#fff" />
                      <Text style={{ color: "#fff", fontSize: height * 0.016, marginHorizontal: width * 0.02, fontFamily: 'Poppins-Medium' }}>
                        ICC World Cup 2022
                      </Text>
                      <View style={bottomStyles.LiveView}>
                        <Text style={{ color: "#fff", fontSize: height * 0.016, fontFamily: 'Poppins-Medium' }}>
                          {item.status === "LIVE" ? item.status : "RECENT"}
                        </Text>
                      </View>
                    </View>

                    <View style={{ borderBottomWidth: 1, borderBottomColor: COLORS.grey, marginVertical: height * 0.005, marginRight: width * 0.02 }} />

                    <View style={bottomStyles.rowView}>
                      <Image source={icons.flag_IN} style={{ marginRight: width * 0.02 }} />
                      <Text style={{ color: "#fff", fontSize: height * 0.016, fontFamily: 'Poppins-Medium' }}>
                        {item.country1.name}
                      </Text>
                      <Text style={{ color: "#fff", fontSize: height * 0.016, position: "absolute", right: width * 0.04, fontFamily: 'Poppins-Medium' }}>
                        *{item.country1.runs}/{item.country1.wickets}(
                        {item.country1.overs}ov)
                      </Text>
                    </View>
                    <View style={[bottomStyles.rowView, { marginVertical: height * 0.01 }]}>
                      <Image
                        source={icons.flag_SA}
                        style={{ marginRight: width * 0.02 }}
                      />
                      <Text style={{ color: "#fff", fontSize: height * 0.016, fontFamily: 'Poppins-Medium' }}>
                        {item.country2.name}
                      </Text>
                      <Text style={{ color: "#fff", fontSize: height * 0.016, position: "absolute", right: width * 0.04, fontFamily: 'Poppins-Medium' }}>
                        *{item.country2.runs}/{item.country2.wickets}(
                        {item.country2.overs}ov)
                      </Text>
                    </View>

                    <View style={[Styles.btn, { backgroundColor: COLORS.red, height: height * 0.03, marginRight: width * 0.02 }]}>
                      <Text style={{ color: "#fff", fontSize: height * 0.014, fontFamily: 'Poppins-Regular' }}>
                        {item.highlight.length > 40 ? item.highlight.substring(0, 40) : item.highlight}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          <Image source={images.Poster} style={{ marginVertical: height * 0.015, marginLeft: -width * 0.04 }} />

          {/* <<-------------------------- Trending Videos --------------------------->> */}
          <Text style={Styles.popTitle}>
            Trending Videos
          </Text>
          <View style={{ height: height * 0.3 }}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={Database.trending[0].videos}
              renderItem={({ item, index }) => {
                return (
                  <View style={[bottomStyles.ScrollSm, { width: width * 0.65, paddingLeft: 0, paddingTop: 0 }]}>
                    <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }} onPress={() => setVideoTab(true)}>
                      <Image source={images.Thumbnail} />
                      <AntDesign name="playcircleo" size={32} color={COLORS.white} style={{ position: "absolute" }} />
                    </TouchableOpacity>
                    <View style={{ padding: width * 0.02 }}>
                      <Text style={{ color: "#fff", fontSize: height * 0.016, fontFamily: 'Roboto-Bold' }}>
                        {item.title}
                      </Text>
                      <View style={[bottomStyles.rowView, { marginTop: height * 0.01, alignItems: "center", paddingLeft: width * 0.01 }]}>
                        <AntDesign name="clockcircleo" size={12} color="#fff" />
                        <Text style={{ color: "#fff", fontSize: height * 0.014, marginLeft: width * 0.01, fontFamily: 'Arial' }}>
                          2 min ago
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>

          {/* <<-------------------------- Trending News --------------------------->> */}
          <Text style={[Styles.popTitle, { marginTop: height * 0.02 }]}>
            Trending News
          </Text>
          <View style={[bottomStyles.ScrollSm, { width: width * 0.94, paddingLeft: 0, height: height * 0.39 }]}>
            <Text style={{ color: "#fff", fontSize: height * 0.018, marginLeft: width * 0.04, marginBottom: height * 0.01, fontFamily: 'Poppins-Medium' }}>
              T20 WORLD CUP 2022
            </Text>
            <Image source={images.NewsImg} resizeMode="contain" style={{ width: width * 0.94 }} />

            <TouchableOpacity style={{ paddingHorizontal: width * 0.02 }} onPress={() => setNewsTab(true)}>
              <Text style={{ color: "#fff", fontSize: height * 0.02, marginTop: height * 0.01, fontWeight: "800", fontFamily: 'Roboto-Bold' }}>
                {trending[0].news[0].headline}
              </Text>
              <Text style={{ color: "#fff", fontSize: height * 0.016, textAlign: "justify", fontFamily: 'Roboto-Regular' }}>
                {trending[0].news[0].body}
              </Text>
              <Text style={{ color: COLORS.red, fontSize: height * 0.016, alignSelf: "flex-end", textDecorationLine: "underline" }}>
                Read more...
              </Text>
            </TouchableOpacity>
          </View>

          <Image source={images.Ad} resizeMode="contain" style={{ width: "96%" }} />

          {/* <<-------------------------- ALL STORIES NEWS --------------------------->> */}
          <Text style={Styles.popTitle}>
            ALL STORIES NEWS
          </Text>
          <View style={{ height: height * 0.4 }}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={Database.trending[0].videos}
              renderItem={({ item, index }) => {
                return (
                  <View style={[bottomStyles.ScrollSm, { width: width * 0.94, paddingLeft: 0, height: height * 0.39 }]}>
                    <Text style={{ color: "#fff", fontSize: height * 0.018, marginLeft: width * 0.04, marginBottom: height * 0.01, fontFamily: 'Poppins-Medium' }}>
                      T20 WORLD CUP 2022
                    </Text>
                    <Image source={images.NewsImg} resizeMode="contain" style={{ width: width * 0.94 }} />

                    <TouchableOpacity style={{ paddingHorizontal: width * 0.02 }} onPress={() => setNewsTab(true)}>
                      <Text style={{ color: "#fff", fontSize: height * 0.02, marginTop: height * 0.01, fontWeight: "800", fontFamily: 'Roboto-Bold' }}>
                        {trending[0].news[0].headline}
                      </Text>
                      <Text style={{ color: "#fff", fontSize: height * 0.016, textAlign: "justify", fontFamily: 'Roboto-Regular' }}>
                        {trending[0].news[0].body}
                      </Text>
                      <Text style={{ color: COLORS.red, fontSize: height * 0.016, alignSelf: "flex-end", textDecorationLine: "underline" }}>
                        Read more...
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>

          {/* <<-------------------------- News Modal --------------------------->> */}
          {
            <Modal transparent visible={newsTab} onRequestClose={() => setNewsTab(false)}>
              <StatusBar style='dark' backgroundColor={COLORS.white} />
              <View style={{ paddingBottom: height * 0.02 }}>
                <View>
                  <Image source={images.CricketNews} />
                  <TouchableOpacity style={{ position: 'absolute', left: width * 0.04, top: height * 0.01, backgroundColor: 'white', borderRadius: 20 }} onPress={() => setNewsTab(false)}>
                    <AntDesign name="leftcircle" size={34} color={COLORS.black} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{ position: 'absolute', right: width * 0.04, top: height * 0.01, backgroundColor: COLORS.black, borderRadius: 20, padding: width * 0.01 }} onPress={() => {
                    const options = {
                      url: trending[1],
                      message: 'Share'
                    }
                    Share.open(options)
                  }}>
                    <Entypo name="share" size={28} color={COLORS.white} />
                  </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: COLORS.black, height: height, padding: width * 0.02, borderTopRightRadius: 25, borderTopLeftRadius: 25, marginTop: -height * 0.025 }}>
                  <Text style={{ color: "#fff", fontSize: height * 0.024, textAlign: 'left', marginVertical: height * 0.01, fontWeight: '800' }}>
                    {trending[0].news[1]['headline']}
                  </Text>
                  <Text style={{ color: "#fff", fontSize: height * 0.018, textAlign: 'left' }}>
                    {trending[0].news[1].body}
                  </Text>
                  <Text style={{ color: "#fff", fontSize: height * 0.018, textAlign: 'left', fontWeight: '600', marginVertical: height * 0.01 }}>
                    {trending[0].news[1]["sub-heading"]}
                  </Text>
                  <Text style={{ color: "#fff", fontSize: height * 0.018, textAlign: 'left' }}>
                    {trending[0].news[1].body}
                  </Text>
                  <Text style={{ color: "#fff", fontSize: height * 0.018, textAlign: 'left', marginVertical: height * 0.01 }}>
                    {trending[0].news[1].body}
                  </Text>
                </View>
              </View>
            </Modal>
          }

        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

export default HomeScreen;

const { height, width } = Dimensions.get("window");

const videoStyle = StyleSheet.create({
  video: {
    flex: 1,
    alignSelf: 'stretch'
  }
})