import { StyleSheet } from "react-native";
import { isIos } from "../utils";

export const rootStyles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export const movieStyles = StyleSheet.create({
    container: {
        margin: 16,
        height: 400,
        width: 350,
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        borderRadius: 30,
        ...StyleSheet.absoluteFillObject,
    },
    title: {
        fontSize: 14,
        marginTop: 4,
    },
    genre: {
        color: '#BBBBBB',
        fontSize: 12,
        lineHeight: 14,
    },
});

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#654DD7"
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 16
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: isIos ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
