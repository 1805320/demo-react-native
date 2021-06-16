import React from "react";
import {Text, StyleSheet, FlatList, View} from "react-native";

const styles = StyleSheet.create({
    textStyle:{
        marginVertical : 50,
        color: "red",
        fontSize: 35,
    }
})

const FlatListScreen = () => {
    const dataList = [
        {name:"n1"},
        {name:"n2"},
        {name:"n3"},
        {name:"n4"},
        {name:"n5"},
        {name:"n6"}
    ]
    return(
        <View>
            <FlatList
                data = {dataList}
                keyExtractor = {(item)=>item.name}
                renderItem = {(element)=>{
                    return <Text style={styles.textStyle}>{element.item.name} hello</Text>;
                }}
            />
        </View>
    )
}

export default FlatListScreen;
