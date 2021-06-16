import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

const ProductScreen = (props) => {
    return (
        <View>
            <Text>
                {props.title}
            </Text>
            <Image style={{width: 50, height: 50}} source={props.img}/>
        </View>
    )
}

export default ProductScreen;