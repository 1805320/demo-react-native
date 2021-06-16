import React, {useReducer} from "react";
import { Text, StyleSheet, View, TextInput  } from "react-native";
import { State } from "react-native-gesture-handler";


const styles = StyleSheet.create({
    textInput:{
        borderColor:"black",
        borderWidth:1,
        margin:20,
    }
})

const initialState = {
    name : "",
}

const reducer = (state,action) => {
    switch (action.type){
        case "SET_TEXT":
            return{
                ...state,
                name:action.payload,
            };
        default:
            return state;
    }
}

const DisplayName = () => {

    const [state,dispatch] = useReducer(reducer,initialState);

    return(
        <View>
            <TextInput 
                style={styles.textInput} 
                value={state.name} 
                onChangeText={(val) => dispatch({type:"SET_TEXT", payload:val})}
                autoCapitalize= "none"
                autoCorrect={false}
            />
            {state.name.length >=5 ? 
                <Text>Name : {state.name}</Text> :
                <Text>Password must have a length of 5 or above</Text>
            }
        </View>
    )
}

export default DisplayName;