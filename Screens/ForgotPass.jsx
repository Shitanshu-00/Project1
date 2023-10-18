import { View, Text, Dimensions, Modal, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { Styles } from "../Components/Styles";
import { COLORS, FONTS } from "../constants/theme";
import Button from "../Components/Button";
import { modal } from "./Styles/screenStyles";
import icons from "../constants/icons";
import { styles } from "../Components/InputComponent/styles";
import { Formik } from "formik";
import * as yup from 'yup';
import auth from '@react-native-firebase/auth'

const { height, width } = Dimensions.get("window");

const emailSchema = yup.object().shape({
  email: yup
  .string()
  .email("Please enter a valid email address")
  .required("Email ID is required")
  .matches(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    "Please enter valid email"
  ),
})

const ForgotPass = (props) => {
  const [visible, setVisible] = useState(false);

  const handleSubmit = (values) => {
      auth().sendPasswordResetEmail(values.email).then(()=>{  ``
        setVisible(true);
        setTimeout(() => {
          props.navigation.replace("ResetPass");
        }, 2000);
      }).catch(error=>{
        alert(error.code);
      })
  };

  return (
    <View style={Styles.container}>
      <View style={[Styles.container2, { paddingTop: height * 0.1 }]}>
        <Text style={[Styles.headText, { textAlign: "center" }]}>
          Forgot Password?
        </Text>
        <Text
          style={{
            fontFamily: FONTS.Arial,
            textAlign: "center",
            fontSize: height * 0.016,
            marginVertical: height * 0.01,
          }}>
          Enter the email address associated with your account and we’ll send
          you a LINK to reset your password
        </Text>

        {/* <<---------- Formik Validation --------->> */}
        <Formik
          validationSchema={emailSchema}
          initialValues={{ email: "" }}
          onSubmit={handleSubmit}>
          {({
            handleChange,
            setFieldTouched,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <View style={{marginTop: height*0.05}}>
              <TextInput
                style={[styles.input, { color: "#010",marginBottom:height*0.01 }]}
                placeholder={"Enter your email"}
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                value={values.email}
                maxLength={30}
              />
              <Text style={[Styles.errors,{marginLeft: width*0.04, fontSize: height*0.016}]}>{touched.email && errors.email}</Text>

              <Button
                title={"SEND"}
                bgColor={COLORS.red}
                onPress={() => handleSubmit()}
              />
            </View>
          )}
        </Formik>
        {
          <Modal transparent visible={visible}>
            <View style={modal.container}>
              <View style={modal.centerView}>
                <Image source={icons.success} style={modal.image} />
                <Text style={[Styles.headText, { marginTop: height * 0.07 }]}>
                  Thank You!
                </Text>
                <Text style={{ textAlign: "center" }}>
                  LINK has been successfully sent to your registered email
                  address
                </Text>
              </View>
            </View>
          </Modal>
        }
      </View>
    </View>
  );
};

export default ForgotPass;
