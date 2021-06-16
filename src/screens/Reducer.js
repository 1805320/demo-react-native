import React, {useReducer} from "react";
import { View,Text, StyleSheet, Button } from "react-native"; 
import ColorGradient from "../../assets/components/ColorGradient";

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + action.val};
      case 'decrement':
        return {count: state.count - 1};
      default:
        return state;
    }
  }

const Reducer = () =>{

    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <View>
            <Text>
                {state.count}
            </Text>
            <Button title="increment" onPress={()=>dispatch({type:"increment", val:100})}/>
            <Button title="decrement" onPress={()=>dispatch({type:"decrement"})}/>
        </View>
    )
}
export default Reducer;