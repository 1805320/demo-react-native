import React, {useState} from "react";
import { Text, StyleSheet, View, Button  } from "react-native";

const styles = StyleSheet.create({

})

const CounterScreen = (props) => {

    let [count, setCount] = useState(0);

    return(
        <View>
            <Text>Counter Value: {count}</Text>
            <Button title="Increase" onPress={()=>{
                setCount(count+1);
            }}/>
            <Button title="Increase" onPress={()=>{
                setCount(count-1);
            }}/>
        </View>
    )
}

export default CounterScreen;