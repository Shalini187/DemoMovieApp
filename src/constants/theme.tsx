import { Dimensions } from "react-native";
import { isTab } from "../utils";

const { width, height } = Dimensions.get("window");
const aspect = isTab();

export const COLORS: any = {
    darkGreen: "#229879",
    darkLime: "#1A8871",
    lightLime: "#BBD6C5",
    lime: "#2AD699",
    lightGreen: "#E7F9EF",
    lightGreen1: "#8EbCA0",

    red_1: "#EB1010",
    red_2: '#FF000066',
    lightRed:"#ff707030",

    white: "#fff",
    white2: '#F9F9F9',
    white3:"#ffffffcc",
    white4:"#ffffffb3",
    white5:"#ffffffe6",

    black: "#020202",
    black_1:"#111111",
    black_2:"#282828",
    black_3:"#000000",
    black_4: '#282828',
    darkBlue:"#121730",
    blue: "#654DD7",
    blue1: '#8166CA',
    blue_2:"#9080CD",
    blue_3:"#E9DBFA",
    blue_4:"#654dd71a",
    blue_5: '#CBC3E3',
    blue_6:"#a78de94a",
    blue_7:"#A78DE930",
    blue_8:"#A78DE9",
    transparent_black:"#00000080",

    gray: "#868686",
    gray2: '#F8F8F8',
    gray3: '#F2F2F2',
    gray4: '#514D4D',
    lightGray: "#DEDEDE",
    lightGray2: '#757575',
    lightGray3: "#BABABA",
    lightGray4: "#BCBCBC",
    lightGray5: "#B0B0B0",
    lightGray6: "#D9D9D9",
    lightGray7: "#F6F7F9",
    darkGray: "#3D3D3D",

    grayRadient:["#BCBCBC", "#BCBCBC", "#BCBCBC"],

    linearGradient:['#A246C7', '#8947D3', '#654DD7'],

    gradients: ['#9850E9', '#6F54EC', '#CD5AE0'],
    transparentBlack1: 'rgba(2, 2, 2, 0.1)',
    transparentBlack3: 'rgba(2, 2, 2, 0.3)',
    transparentBlack5: 'rgba(2, 2, 2, 0.5)',
    transparentBlack7: 'rgba(2, 2, 2, 0.7)',
    transparentBlack9: 'rgba(2, 2, 2, 0.9)',
    transparentBlack10: 'rgba(9, 9, 9, 0.8)',

    transparentBlue: 'rgba(167, 141, 233, 0.19)',

    transparentGray: 'rgba(77,77,77, 0.8)',
    transparentDarkGray: 'rgba(20,20,20, 0.9)',
    lightPink: "#FFDDE1",
    lightPink_1: "#ffdde126",
    lightPink_2: "#FFDDE180",
    lightPink_3: "#FFEEF0",
    darkPink: "#FC6DAB",
    darkPink_1: "#EF5DA8",
    transparent: 'transparent',
};

export const SIZES: any = {
    // global sizes
    base: aspect ? 12 : 8,
    font: aspect ? 18 : 14,
    radius: aspect ? 16 : 12,
    padding: aspect ? 28 : 24,

    // font sizes
    largeTitle: aspect ? 44 : 40,
    h1: aspect ? 34 : 30,
    h2: aspect ? 26 : 22,
    h3: aspect ? 20 : 16,
    h4: aspect ? 18 : 14,
    body1: aspect ? 34 : 30,
    body2: aspect ? 26 : 22,
    body3: aspect ? 20 : 16,
    body4: aspect ? 18 : 14,
    body5: aspect ? 16 : 12,

    // app dimensions
    width,
    height
};
export const FONTS: any = {
    fontSize_10: {
        
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 10,
        lineHeight: 12,
        letterSpacing: -0.4,
        textAlign: "center",
        color: COLORS.gray,
    },
    fontSize_12: {
        
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: -0.4,
        textAlign: "center",
        color: COLORS.gray4,
    },
    fontSize_14: {
        
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 17,
        color: COLORS.black,
        textAlign: 'left',
    },
    fontSize_16: {
        
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 16,
        lineHeight: 25,
        alignItems: "center",
        color: COLORS.gray,
    },
    fontSize_18: {
        
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.1,
        textAlign: "center",
        color: COLORS.black_3,
    },

    fontSize_20: {
        
        fontStyle: 'normal',
        fontWeight: "400",
        fontSize: 20,
        lineHeight: 25,
        textAlign: "left",
        color: COLORS.white,

    },
    fontSize_21: {
        
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 21,
        lineHeight: 25,
        textAlign: "left",
        color: COLORS.black_1
    },

    fontSize_26: {
        
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 26,
        lineHeight: 31,
        textAlign: "left",
        color: COLORS.black_1
    },
    fontSize_28: {
        
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 28,
        lineHeight: 34,
        textAlign: "center",
        color: COLORS.blue
    },

    fontSize_32: {
        
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 32,
        lineHeight: 38,
        textAlign: "left",
        color: COLORS.black
    },

    fontSize_40: {
        
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 40,
        lineHeight: 48,
        textAlign: "right",
        color: COLORS.blue
    },
};

const appTheme: any = { COLORS, SIZES, FONTS };

export default appTheme;