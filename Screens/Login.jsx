import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Styles } from "../Components/Styles";
import images from "../constants/images";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { Formik } from "formik";
import { loginSchema } from "../Utils/Schema";
import Checkbox from "expo-checkbox";
import Button from "../Components/Button";
import icons from "../constants/icons";
import auth from '@react-native-firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";

const { height, width } = Dimensions.get("window");

const Login = (props) => {
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleSubmit = (values, { resetForm }) => {
    auth().signInWithEmailAndPassword(values.email, values.password)
      .then((response) => {
        props.navigation.navigate("BottomNav");
        AsyncStorage.setItem('UserId', response.user.uid);
        resetForm();
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          alert("User not found");
        } else {
          alert(error.code);
        }
      });
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.LogoWrapper}>
        <Image source={images.Logo} />
      </View>
      <View style={Styles.container2}>
        <Text
          style={[
            FONTS.Roboto.bold,
            { fontSize: SIZES.xL, fontWeight: "600" },
          ]}>
          LOGIN
        </Text>
        <Text style={[FONTS.Roboto.regular, { fontSize: SIZES.Large }]}>
          Log in to your account
        </Text>
        <Formik
          validationSchema={loginSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}>
          {({
            handleChange,
            handleSubmit,
            setFieldTouched,
            values,
            touched,
            errors,
          }) => (
            <View>
              <TextInput
                placeholder="Enter your email address"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                cursorColor={COLORS.red}
                value={values.email}
                style={Styles.input}
              />
              <Text style={Styles.errors}>{touched.email && errors.email}</Text>

              <View>
                <TextInput
                  placeholder="Enter Password"
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  cursorColor={COLORS.red}
                  value={values.password}
                  secureTextEntry={visible}
                  style={Styles.input}
                />
                <TouchableOpacity
                  style={Styles.iconWrapper}
                  onPress={() => setVisible(!visible)}>
                  <Image
                    source={icons.eye}
                    resizeMode="contain"
                    style={[
                      Styles.iconStyle,
                      { tintColor: COLORS.grey, width: width * 0.05 },
                    ]}
                  />
                </TouchableOpacity>
              </View>
              <Text style={Styles.errors}>
                {touched.password && errors.password}
              </Text>

              <View style={[Styles.rowView, { marginTop: SIZES.Large, justifyContent: 'space-between' }]}>
                <View style={Styles.rowView}>
                  <Checkbox
                    value={checked}
                    onValueChange={setChecked}
                    color={checked ? COLORS.red : COLORS.black}
                  />
                  <Text style={{ fontWeight: "bold" }}>Remember me</Text>
                </View>
                <Text style={{ color: COLORS.red, fontWeight: "bold" }} onPress={() => props.navigation.navigate('ForgotPass')}>
                  Forgot Password?
                </Text>
              </View>

              <Button
                bgColor={COLORS.red}
                title={"LOGIN"}
                onPress={() => handleSubmit()}
              />
            </View>
          )}
        </Formik>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>OR</Text>
          <View style={Styles.rowView}>
            <TouchableOpacity>
              <Image
                source={icons.google}
                resizeMode="contain"
                style={Styles.iconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={icons.fb}
                resizeMode="contain"
                style={Styles.iconStyle}
              />
            </TouchableOpacity>
          </View>

          <Text>
            Not have an Account?{" "}
            <Text
              style={{ color: COLORS.red, fontWeight: "bold" }}
              onPress={() => props.navigation.navigate("Register")}>
              Register Here{" "}
            </Text>{" "}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
