import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Styles } from "../Components/Styles";
import images from "../constants/images";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { Formik } from "formik";
import { loginSchema } from "../Utils/Schema";
import Checkbox from "expo-checkbox";
import Button from "../Components/Button";
import icons from "../constants/icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const { height, width } = Dimensions.get("window");

const Register = (props) => {
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(true);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  {
    /*----- Google SignIn ----- */
  }
  GoogleSignin.configure({
    webClientId:
      "245289014657-3km5nj21g20vkr87109c8uu4jdphd8ti.apps.googleusercontent.com",
  });

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const googleSignin = async () => {
    const { idToken } = await GoogleSignin.signIn();
    AsyncStorage.setItem("AccessToken", idToken);
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user_signIn = auth().signInWithCredential(googleCredential);

    user_signIn
      .then((res) => {
        const user = JSON.stringify(res);
        AsyncStorage.setItem("User", user);
        props.navigation.navigate("BottomNav");
      })
      .catch((error) => {
        alert(error);
      });
  };
  {
    /*----- Registration using Email and Password -----*/
  }
  const handleSubmit = (values, { resetForm }) => {
    auth().createUserWithEmailAndPassword(values.email, values.password)
      .then((response) => {
        const user = response.user;
        AsyncStorage.setItem("AccessToken", user.accessToken);
        props.navigation.navigate("Login");
        resetForm();
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("Email address is already in use");
        }
        if (error.code === "auth/invalid-email") {
          alert("Enter valid Email Address");
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
          REGISTER
        </Text>
        <Text style={[FONTS.Roboto.regular, { fontSize: SIZES.Large }]}>
          Create account
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

              <View style={[Styles.rowView, { marginTop: SIZES.Large }]}>
                <Checkbox
                  value={checked}
                  onValueChange={setChecked}
                  color={"#353535"}
                />
                <Text>
                  By submitting this form I accept to the{" "}
                  <Text style={{ color: COLORS.red }}>
                    Terms &{"\n"} Conditions
                  </Text>{" "}
                  and <Text style={{ color: COLORS.red }}>Privacy Policy</Text>{" "}
                  of this platform.
                </Text>
              </View>

              <Button
                bgColor={checked ? COLORS.red : COLORS.grey}
                title={"REGISTER"}
                disable={checked ? false : true}
                onPress={() => handleSubmit()}
              />
            </View>
          )}
        </Formik>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>OR</Text>
          <View style={Styles.rowView}>
            <TouchableOpacity
              disabled={checked ? false : true}
              onPress={() => googleSignin()}>
              <Image
                source={icons.google}
                resizeMode="contain"
                style={Styles.iconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity disabled={checked ? false : true}>
              <Image
                source={icons.fb}
                resizeMode="contain"
                style={Styles.iconStyle}
              />
            </TouchableOpacity>
          </View>

          <Text>
            Already have an account?{" "}
            <Text
              style={{ color: COLORS.red, fontWeight: "bold" }}
              onPress={() => props.navigation.navigate("Login")}>
              {" "}
              Log In{" "}
            </Text>{" "}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
