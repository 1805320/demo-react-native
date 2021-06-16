import React, {useState} from "react";
import {View, StyleSheet, FlatList, Button} from "react-native";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const ColorScreen = (props) => {

    let [colors, setColors] = useState([]);

    const addColors = () => {
        setColors([...colors,getRandomColor()])
    }

    return (
        <View>
            {/* {colors.map((val)=>{
                return <View key={val} style={{height:100, width:100, backgroundColor:val}}></View>;
            })} */}
            <Button title="Click me" onPress={addColors}/>
            <FlatList
                data={colors}
                keyExtractor={(item)=>{
                    return item;
                }}
                renderItem={(element)=>{
                    return(
                        <View style={{height:100, width:100, backgroundColor:element.item}}></View>
                    )
                }}    
            />
        </View>
    )
}

export default ColorScreen;