import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Styles } from "../Components/Styles";
import icons from "../constants/icons";
import { Entypo } from "@expo/vector-icons";
import Input from "../Components/InputComponent/Input";
import Button from "../Components/Button";
import { COLORS } from "../constants/theme";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[a-zA-Z]+$/, "Name must contain only Alphabets")
    .min(3, "Name should have atleast 3 characters"),

  contact: yup
    .string()
    .required('Contact is required')
    .matches(/^[\S]*$/, "Spaces not allowed")
    .matches(/^[0-9]*$/, "Enter a valid contact number")
    .min(10, "Must be 10 digits"),

  country: yup
    .string()
    .matches(/^[a-zA-Z]+$/, "Country must contain only Alphabets")
    .min(3, "Country should have atleast 3 characters"),

  state: yup
    .string()
    .matches(/^[a-zA-Z]+$/, "State must contain only Alphabets")
    .min(3, "State should have atleast 3 characters"),

  city: yup
    .string()
    .matches(/^[a-zA-Z]+$/, "City must contain only Alphabets")
    .min(3, "City should have atleast 3 characters"),
});

// <<-------------------- Main Function --------------------->>
const Profile = (props) => {
  const userId = auth().currentUser.uid;
  const dbRef = firestore().collection("users").doc(userId);
  const email = {'email': auth().currentUser.email};

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // console.log(dbRef);
  };

  const handleSubmit = (values) => {
    dbRef.set(values);
    dbRef.update(email)
  };

  return (
    <SafeAreaView style={[Styles.container,{paddingTop:0}]}>
      <View style={[Styles.rowView, { paddingHorizontal: width * 0.02 }]}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Entypo name="chevron-small-left" size={30} color="white" />
        </TouchableOpacity>
        <Text style={[Styles.title, { marginLeft: width * 0.32 }]}>
          Profile
        </Text>
      </View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginVertical: height * 0.04,
        }}>
        <Image source={icons.Profile} />
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: width * 0.05,
        }}>
        <Formik
          initialValues={{
            name: "",
            contact: "",
            dob: "",
            country: "",
            state: "",
            city: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({
            handleChange,
            setFieldTouched,
            handleSubmit,
            touched,
            values,
            errors,
          }) => (
            <View style={{ width: "100%" }}>
              <Input
                title={"Name*"}
                top={height * 0.015}
                onChangeText={handleChange("name")}
                onBlur={() => setFieldTouched("name")}
                value={values.name}
                maxLength={25}
              />
              <Text
                style={[
                  Styles.errors,
                  { marginTop: height * 0.005, marginHorizontal: width * 0.04 },
                ]}>
                {touched.name && errors.name}
              </Text>

              <Input
                title={"Email*"}
                editable={false}
                top={height * 0.015}
                value={email.email}
              />

              <Input
                title={"Contact*"}
                top={height * 0.015}
                onChangeText={handleChange("contact")}
                onBlur={() => setFieldTouched("contact")}
                value={values.contact}
                maxLength={10}
              />
              <Text
                style={[
                  Styles.errors,
                  { marginTop: height * 0.005, marginHorizontal: width * 0.04 },
                ]}>
                {touched.contact && errors.contact}
              </Text>

              <Input title={"Date of Birth"} top={height * 0.015} />

              <Input
                title={"Country"}
                top={height * 0.015}
                onChangeText={handleChange("country")}
                onBlur={() => setFieldTouched("country")}
                value={values.country}
                maxLength={16}
              />
              <Text
                style={[
                  Styles.errors,
                  { marginTop: height * 0.005, marginHorizontal: width * 0.04 },
                ]}>
                {touched.country && errors.country}
              </Text>

              <Input
                title={"State"}
                top={height * 0.015}
                onChangeText={handleChange("state")}
                onBlur={() => setFieldTouched("state")}
                value={values.state}
                maxLength={16}
              />
              <Text
                style={[
                  Styles.errors,
                  { marginTop: height * 0.005, marginHorizontal: width * 0.04 },
                ]}>
                {touched.state && errors.state}
              </Text>

              <Input
                title={"City"}
                top={height * 0.015}
                onChangeText={handleChange("city")}
                onBlur={() => setFieldTouched("city")}
                value={values.city}
                maxLength={16}
              />
              <Text
                style={[
                  Styles.errors,
                  { marginTop: height * 0.005, marginHorizontal: width * 0.04 },
                ]}>
                {touched.city && errors.city}
              </Text>

              <Button
                title={"Edit Profile"}
                bgColor={COLORS.red}
                top={height * 0.04}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const { height, width } = Dimensions.get("window");
