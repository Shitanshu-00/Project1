import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";

const { height, width } = Dimensions.get("window");

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingTop: height * 0.01,
  },
  container2: {
    flex: 1,
    width: width,
    marginTop: SIZES.xxL,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: height * 0.04,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grey,
    height: SIZES.xxL,
    marginVertical: height * 0.015,
    borderRadius: 10,
    paddingHorizontal: width * 0.04,
    color: COLORS.grey,
    elevation: 2,
    backgroundColor: '#fff'
  },
  errors: {
    fontFamily: 'Roboto-Regular',
    color: COLORS.red,
    marginVertical: -height * 0.01,
    marginHorizontal: width * 0.02,
    fontSize: height * 0.016
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: width * 0.02,
  },

  btn: {
    height: SIZES.xxL,
    borderRadius: 50,
    marginVertical: SIZES.Large,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },

  btnTxt: {
    // fontFamily: FONTS.Roboto.bold,
    color: '#fff',
    fontSize: SIZES.Large,
    fontWeight: 'bold'
  },

  iconStyle: {
    height: SIZES.xL,
    marginVertical: SIZES.Large
  },

  LogoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.05
  },

  iconWrapper: {
    position: 'absolute',
    alignItems: 'flex-end',
    right: width * 0.04
  },
  title: {
    fontFamily: 'Roboto-Bold',
    color: '#fff',
    fontSize: SIZES.Large,

  },
  headText: {
    fontFamily: 'Roboto-Bold',
    fontSize: height * 0.03,
  },

  popTitle: {
    color: "#010",
    fontFamily: 'Poppins-Bold',
    marginVertical: height * 0.01,
    fontSize: SIZES.Large,
  }

});