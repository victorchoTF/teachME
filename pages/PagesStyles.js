import { StyleSheet } from "react-native";

const PagesStyles = StyleSheet.create({
    formHolder: {
        display: 'flex',
        width: 'auto',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainPage: {
        display: 'flex',
        width: '100%',
        top: 0,
        minHeight: '100%',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 35,
    }
});

export default PagesStyles;