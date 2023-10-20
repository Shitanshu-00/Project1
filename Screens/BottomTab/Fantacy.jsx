import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { bottomStyles } from "./Styles.BottomTab";

const Fantacy = () => {
  return (
    <SafeAreaView style={[bottomStyles.container,{alignItems:'center', justifyContent:'center'}]}>
      <View style={bottomStyles.fantacyLogo}>
        <Text
          style={{
            fontSize: SIZES.Large,
            color: COLORS.white,
            fontWeight: "bold",
          }}>
          COMING SOON!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Fantacy;
