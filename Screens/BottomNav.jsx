import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./BottomTab/HomeScreen";
import Matches from "./BottomTab/Matches";
import Fantacy from "./BottomTab/Fantacy";
import News from "./BottomTab/News";
import More from "./BottomTab/More";
import { Dimensions, Image } from "react-native";
import { COLORS } from "../constants/theme";
import icons from "../constants/icons";

const { height, width } = Dimensions.get("window");
const Bottom = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: COLORS.black, height: height * 0.08 },
        tabBarActiveTintColor: COLORS.red,
      }}
      initialRouteName="Home">
      <Bottom.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: (tabClick) => {
            return (
              <Image
                source={icons.Home}
                style={{
                  tintColor: tabClick.focused ? COLORS.red : COLORS.white,
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Matches"
        component={Matches}
        options={{
          tabBarIcon: (tabClick) => {
            return (
              <Image
                source={icons.matches}
                style={{
                  tintColor: tabClick.focused ? COLORS.red : COLORS.white,
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Fantacy"
        component={Fantacy}
        options={{
          tabBarIcon: (tabClick) => {
            return (
              <Image
                source={icons.fantacy}
                style={{
                  tintColor: tabClick.focused ? COLORS.red : COLORS.white,
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: (tabClick) => {
            return (
              <Image
                source={icons.news}
                style={{
                  tintColor: tabClick.focused ? COLORS.red : COLORS.white,
                }}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: (tabClick) => {
            return (
              <Image
                source={icons.more}
                style={{
                  tintColor: tabClick.focused ? COLORS.red : COLORS.white,
                }}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNav;
