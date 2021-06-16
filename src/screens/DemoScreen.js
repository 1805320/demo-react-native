import React from "react";
import {Text, StyleSheet, View} from "react-native";

const styles = StyleSheet.create({
    textStyle:{
        color:"red",
        fontSize:50,
    },
    secondaryText:{
        color:"green",
        fontSize:100,
    }
})

const DemoScreen = () => {
    return(
        <View>
            <Text style={styles.textStyle}>
                Hello World
            </Text>
            <Text style={styles.secondaryText}>
                Bye World
            </Text>
        </View>
    )
}

export default DemoScreen; 