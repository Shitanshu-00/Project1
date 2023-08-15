import { Dimensions } from "react-native";

const {height, width} = Dimensions.get("window");

const COLORS = {
    white : '#f4f4f4',
    black : '#010000',
    red : '#E73725',
    grey : '#696969',
};

const FONTS = {
    Arial : 'Arial',
    Lato : {
        thin : 'LatoThin',
        regular : 'LatoRegular',
        bold : 'LatoBold',
        black : 'LatoBlack'
    },
    Poppins : {
        regular : 'PoppinsRegular',
        medium : 'PoppinsMedium',
        bold : 'PoppinsBold'
    },
    Roboto : {
        regular : 'RobotoRegular',
        bold : 'RobotoBold',
        black : 'RobotoBlack'
    }
};

const SIZES = {
    xxL : height*0.06,
    xL : height*0.042,
    Large : height*0.022
}

export { COLORS, FONTS, SIZES}