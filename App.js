// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Text,
    View,
    Touchable
} from "react-native";
import Mapview, { PROVIDER_GOOGLE } from "react-native-maps";
import FontAwesome from '@expo/vector-icons/FontAwesome'




export default function App() {
    const [dark, setDark] = useState(false)
    return ( <
        View style = { styles.container } >
        <
        Mapview style = { style.map }
        provider = { PROVIDER_GOOGLE } >
        <
        TouchableOpacity onPress = {
            () => setDark(!dark) }
        style = {
            {
                backgroundColor: "#FFF",
                height: 30,
                borderRadius: 15,
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                marginTop: 60,
                alignSelf: 'flex-end',
                right: 20,


            }
        } >
        <
        FontAwesome name = "adjust"
        size = { 30 }
        /> <
        /TouchableOpacity> <
        /Mapview> <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
});