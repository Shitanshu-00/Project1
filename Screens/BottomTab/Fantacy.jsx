import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Styles } from "./Styles.BottomTab";
import { COLORS, SIZES } from "../../constants/theme";

const Fantacy = () => {
  return (
    <SafeAreaView style={[Styles.container,{alignItems:'center', justifyContent:'center'}]}>
      <View style={Styles.fantacyLogo}>
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
