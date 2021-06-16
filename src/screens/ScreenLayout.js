import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    viewStyle:{
        height: 200,
        borderColor: "black",
        borderWidth: 5,
        flexDirection: "column",
    },
    textStyle : {
        borderColor:"red",
        borderWidth: 3,
    },

    textStyle1 : {
        borderColor:"red",
        borderWidth: 3,
        alignSelf: "stretch"
    },

    textStyle2 : {
        borderColor:"red",
        borderWidth: 3,
        position: "absolute",
        fontSize: 20
    },

    textStyle3 : {
        borderColor:"red",
        borderWidth: 3,

        ...StyleSheet.absoluteFillObject,
        //same thing as below
        
        // left: 0,
        // right:0,
        // top:0,
        // bottom:0,
        // position: "absolute"
    }
})

const ScreenLayout = () => {
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Hello World</Text>
            <Text style={styles.textStyle1}>Hello World</Text>
            <Text style={styles.textStyle2}>Hello World</Text>
            <Text style={styles.textStyle3}>Hello World</Text>
        </View>
    )
}

export default ScreenLayout;