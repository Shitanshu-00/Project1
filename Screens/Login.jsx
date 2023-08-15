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

const {height, width} = Dimensions.get("window");

const Login = (props) => {

  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleSubmit = (values) => {
    // props.navigation.navigate('BottomNav')
    
  }

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.LogoWrapper}>
        <Image source={images.Logo} />
      </View>
      <View style={Styles.container2}>
        <Text style={[FONTS.Roboto.bold, { fontSize: SIZES.xL, fontWeight: '600' }]}>LOGIN</Text>
        <Text style={[FONTS.Roboto.regular, { fontSize: SIZES.Large }]}>Log in to your account</Text>
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
              <View style={Styles.rowView}>
                <Checkbox
                  value={checked}
                  onValueChange={setChecked}
                  color={COLORS.red}
                />
                <Text style={{ fontWeight: 'bold' }}>Remember me</Text>
              </View>
              <Text style={{ color: COLORS.red, fontWeight: 'bold' }}>Forgot Password?</Text>
            </View>

            <Button bgColor={COLORS.red} title={'REGISTER'} onPress={() => handleSubmit()} />

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

          <Text>Not have an Account? <Text style={{ color: COLORS.red, fontWeight: 'bold' }} onPress={() => props.navigation.navigate('Register')}>Register Here </Text> </Text>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Login