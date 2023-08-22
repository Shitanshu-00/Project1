import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Styles } from "./Styles.BottomTab";
import AsyncStorage from "@react-native-async-storage/async-storage";
import images from "../../constants/images";
import icons from "../../constants/icons";

const HomeScreen = () => {
  const [name, setName] = useState("Guest");

  const [user, setUser] = useState([]);
  useEffect(() => {
    getValue();
  }, []);

  const getValue = async () => {
    const res = await AsyncStorage.getItem("User");
    res != null ? setUser(JSON.parse(res)) : null;
    setName(user.additionalUserInfo.profile.name);
  };

  return (
    <SafeAreaView style={Styles.container}>
      {/*-----Header----- */}
      <View style={[Styles.rowView, Styles.header]}>
        <View style={{ marginLeft: 12 }}>
          <Image source={images.Logo_sm} />
        </View>
        <View style={[Styles.rowView, { gap: 20 }]}>
          <TouchableOpacity>
            <Image source={icons.search} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.notification_bell} />
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Image source={icons.Profile_Sm} resizeMode="contain" />
            <Text style={Styles.title_sm}>
              {name.length > 10 ? name.substring(0, 10) + "..." : name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
