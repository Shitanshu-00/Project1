import { View, Text, Image, TextInput, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Styles } from '../Components/Styles'
import images from '../constants/images'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import { Formik } from 'formik'
import { loginSchema } from '../Utils/Schema'
import Checkbox from 'expo-checkbox'
import Button from '../Components/Button'
import icons from '../constants/icons'
import { auth } from '../Utils/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

const { height, width } = Dimensions.get("window");


const Register = (props) => {

  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleSubmit = (values, { resetForm }) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(response => {
        const user = response.user;
        AsyncStorage.setItem("AccessToken", user.accessToken)
        console.log(user.accessToken);
        props.navigation.navigate('Login');
        resetForm();
      })
      .catch(error => {
        console.log(error);
        if (error.code === "auth/email-already-in-use") {
          alert("Email address is already in use");
        }
        if (error.code === "auth/invalid-email") {
          alert("Enter valid Email Address")
        }
      })
  }


  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.LogoWrapper}>
        <Image source={images.Logo} />
      </View>
      <View style={Styles.container2}>
        <Text style={[FONTS.Roboto.bold, { fontSize: SIZES.xL, fontWeight: '600' }]}>REGISTER</Text>
        <Text style={[FONTS.Roboto.regular, { fontSize: SIZES.Large }]}>Create account</Text>
        <Formik
          validationSchema={loginSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
        >{({
          handleChange,
          handleSubmit,
          setFieldTouched,
          values,
          touched,
          errors
        }) => (
          <View>
            <TextInput placeholder='Enter your email address'
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              cursorColor={COLORS.red}
              value={values.email}
              style={Styles.input} />
            <Text style={Styles.errors}>{touched.email && errors.email}</Text>

            <View >
              <TextInput placeholder='Enter Password'
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                cursorColor={COLORS.red}
                value={values.password}
                secureTextEntry={visible}
                style={Styles.input} />
              <TouchableOpacity style={Styles.iconWrapper} onPress={() => setVisible(!visible)}>
                <Image source={icons.eye} resizeMode='contain' style={[Styles.iconStyle, { tintColor: COLORS.grey, width: width * 0.05 }]} />
              </TouchableOpacity>
            </View>
            <Text style={Styles.errors}>{touched.password && errors.password}</Text>

            <View style={[Styles.rowView, { marginTop: SIZES.Large }]}>
              <Checkbox
                value={checked}
                onValueChange={setChecked}
                color={'#353535'}
              />
              <Text>By submitting this form I accept to the <Text style={{ color: COLORS.red }}>Terms &{'\n'} Conditions</Text> and <Text style={{ color: COLORS.red }}>Privacy Policy</Text> of this platform.</Text>
            </View>

            <Button bgColor={checked ? COLORS.red : COLORS.grey} title={'REGISTER'} disable={checked ? false : true} onPress={() => handleSubmit()} />

          </View>
        )}
        </Formik>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>OR</Text>
          <View style={Styles.rowView}>
            <TouchableOpacity>
              <Image source={icons.google} resizeMode='contain' style={Styles.iconStyle} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={icons.fb} resizeMode='contain' style={Styles.iconStyle} />
            </TouchableOpacity>
          </View>

          <Text>Already have an account? <Text style={{ color: COLORS.red, fontWeight: 'bold' }} onPress={() => props.navigation.navigate('Login')}> Log In </Text> </Text>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Register