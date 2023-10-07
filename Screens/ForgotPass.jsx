import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Styles } from "../Components/Styles";
import Input from "../Components/InputComponent/Input";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import Button from "../Components/Button";

const { height, width } = Dimensions.get("window");

const ForgotPass = (props) => {

    const handlePress = () => {
        alert("Link Sent");
        props.navigation.navigate('ResetPass');
    };

    return (
        <View style={Styles.container}>
            <View style={[Styles.container2, { paddingTop: height * 0.1 }]}>
                <Text
                    style={{
                        fontFamily: FONTS.Roboto.bold,
                        fontSize: height * 0.03,
                        textAlign: "center",
                    }}>
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
                <Input placeholder={"Enter your email"} top={height*0.02}/>
                <Button
                    title={"SEND"}
                    bgColor={COLORS.red}
                    onPress={() => handlePress()}
                />
            </View>
        </View>
    );
};

export default ForgotPass;
