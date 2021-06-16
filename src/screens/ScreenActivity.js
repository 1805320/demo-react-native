import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainView:{
        height: 100,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    viewOne:{
        backgroundColor:"red",
        height: 100,
        width: 100
    },
    viewTwo:{
        backgroundColor:"yellow",
        top: 100,
        height: 100,
        width: 100
    },
    viewThree:{
        backgroundColor:"blue",
        height: 100,
        width: 100
    }

});

const ScreenActivity = () => {
    return(
        <View style={styles.mainView}>
            <View style={styles.viewOne}></View>
            <View style={styles.viewTwo}></View>
            <View style={styles.viewThree}></View>
        </View>
    )
}

export default ScreenActivity;