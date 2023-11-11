import { View, Text, SafeAreaView, Dimensions } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { bottomStyles } from "./Styles.BottomTab";

const Fantacy = () => {
  return (
    <SafeAreaView style={bottomStyles.container}>
      <View style={{ backgroundColor: COLORS.black, height: height * 0.07, alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: width * 0.04 }}>
        <Text style={{ color: COLORS.white, fontSize: height * 0.03,fontFamily:'Roboto-Bold' }}>Fantacy</Text>
      </View >
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <View style={bottomStyles.fantacyLogo}>
          <Text
            style={{
              fontSize: SIZES.Large,
              color: COLORS.white,
              fontFamily: 'Poppins-Bold',
              letterSpacing: 2
            }}>
            COMING SOON!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Fantacy;

const { height, width } = Dimensions.get('window');
