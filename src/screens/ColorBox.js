import React from "react";
import { View, StyleSheet  } from "react-native";
import { useState } from "react/cjs/react.development";
import ColorGradient from "../../assets/components/ColorGradient";


const ColorBox = () => {

    let [red,setRed] = useState(0);
    let [blue, setBlue] = useState(0);
    let [green, setGreen] = useState(0);

    const changeRed = (val) => {
        if(red+val>255){
            setRed(255);
        }
        else if(red+val<0){
            setRed(0)
        }
        else{
            setRed(red+val);
        }
    }

    const changeBlue = (val) => {
        if(blue+val>255){
            setBlue(255);
        }
        else if(blue+val<0){
            setBlue(0)
        }
        else{
            setBlue(blue+val);
        }
    }

    const changeGreen = (val) => {
        if(green+val>255){
            setGreen(255);
        }
        else if(green+val<0){
            setGreen(0)
        }
        else{
            setGreen(green+val);
        }
    }

    return (
        <View>
            <ColorGradient color="Red" change={changeRed}/>
            <ColorGradient color="Blue" change={changeBlue}/>
            <ColorGradient color="Green" change={changeGreen}/>
            <View style={{height:100, width:100, backgroundColor:`rgb(${red},${green},${blue})`}} ></View>
        </View>
    )
}

export default ColorBox;