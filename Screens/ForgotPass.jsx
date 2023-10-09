import { View, Text, Dimensions, Modal, Image } from "react-native";
import React, { useState } from "react";
import { Styles } from "../Components/Styles";
import Input from "../Components/InputComponent/Input";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import Button from "../Components/Button";
import { modal } from "./Styles/screenStyles";
import icons from "../constants/icons";

const { height, width } = Dimensions.get("window");

const ForgotPass = (props) => {

    const [visible, setVisible] = useState(false);

    const handlePress = () => {
        setVisible(true);
        setTimeout(() => {
            props.navigation.replace('ResetPass');
        }, 2000);
    };

    return (
        <View style={Styles.container}>
            <View style={[Styles.container2, { paddingTop: height * 0.1 }]}>
                <Text
                    style={[Styles.headText, { textAlign: "center" }]}>
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
                <Input placeholder={"Enter your email"} top={height * 0.02} />
                <Button
                    title={"SEND"}
                    bgColor={COLORS.red}
                    onPress={() => handlePress()}
                />
                {
                    <Modal transparent visible={visible} >
                        <View style={modal.container}>
                            <View style={modal.centerView}>
                                <Image source={icons.success} style={modal.image} />
                                <Text style={[Styles.headText, { marginTop: height * 0.07 }]}>Thank You!</Text>
                                <Text style={{textAlign:'center'}}>LINK has been successfully sent to your registered email address</Text>
                            </View>
                        </View>
                    </Modal>
                }
            </View>
        </View>
    );
};

export default ForgotPass;
