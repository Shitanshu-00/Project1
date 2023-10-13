import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Styles } from "./Styles.BottomTab";
import images from "../../constants/images";
import icons from "../../constants/icons";
import auth from "@react-native-firebase/auth";
import storage from '@react-native-firebase/storage'


const HomeScreen = (props) => {
  const [name, setName] = useState("");
  const storageRef = storage().ref('/images/')

  useEffect(() => {
    getValue();
    console.log(storageRef.getMetadata());
  }, []);

  const getValue = async () => {
    if (!auth().currentUser.displayName) {
      setName("Guest");
    } else {
      setName(auth().currentUser.displayName);
    }
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
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => props.navigation.navigate("Profile")}>
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
