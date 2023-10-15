import {
  View,
  Text,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Styles } from "../Components/Styles";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import Button from "../Components/Button";
import { Formik } from "formik";
import { loginSchema } from "../Utils/Schema";
import { styles } from "../Components/InputComponent/styles";
import icons from "../constants/icons";

const ResetPass = (props) => {

    const [visible, setVisible] = useState(true);

  const handleSubmit = (values) => {
    alert("Password Changed");
    props.navigation.replace("BottomNav");
  };
  return (
    <View style={Styles.container}>
      <View style={[Styles.container2, { paddingTop: height * 0.1 }]}>
        <Text style={[Styles.headText, { textAlign: "center" }]}>
          Reset Password
        </Text>

        {/* <<---------- Formik Validation --------->> */}
        <Formik
          validationSchema={loginSchema}
          initialValues={{ password: "", confirmPass: "" }}
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
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TextInput
                  style={[styles.input, { color: "#010" }]}
                  placeholder={"Enter new password"}
                  top={height * 0.04}
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  value={values.password}
                  maxLength={16}
                  secureTextEntry={visible}
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: width * 0.04,
                    top: height * 0.054,
                  }} onPress={()=> setVisible(!visible)}>
                  <Image
                    source={icons.eye}
                    style={{
                      height: SIZES.Large,
                      width: SIZES.Large,
                      tintColor: COLORS.grey,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={[
                  Styles.errors,
                  {
                    marginTop: height * 0.04,
                    fontSize: height * 0.016,
                    marginHorizontal: width * 0.04,
                  },
                ]}>
                {touched.password && errors.password}
              </Text>

              <TextInput
                style={[
                  styles.input,
                  { marginTop: height * 0.02, color: "#010" },
                ]}
                placeholder={"Confirm password"}
                onChangeText={handleChange("confirmPass")}
                onBlur={() => setFieldTouched("confirmPass")}
                value={values.confirmPass}
                maxLength={16}
              />
              <Text
                style={[
                  Styles.errors,
                  {
                    marginTop: height * 0.005,
                    fontSize: height * 0.016,
                    marginHorizontal: width * 0.04,
                  },
                ]}>
                {touched.confirmPass && errors.confirmPass}
              </Text>
              <Button
                title={"RESET"}
                bgColor={COLORS.red}
                top={height * 0.04}
                onPress={() => handleSubmit()}
              />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default ResetPass;

const { height, width } = Dimensions.get("window");
