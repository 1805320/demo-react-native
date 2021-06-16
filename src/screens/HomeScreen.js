import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  const { navigate } = props.navigation; 
  return (
    <View>
      <Text style={styles.text}>Main Screen here</Text>
      <Button 
        title={"DemoScreen here"}
        onPress={() => navigate("DemoScreen")}
      />
      <TouchableOpacity
        onPress={()=>props.navigation.navigate("List")}
      >
        <Text>List page here</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigate("ProductDetail")
      }}>
        <Text>Press for image</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        navigate("Counter")
      }}>
        <Text>Counter</Text>
      </TouchableOpacity>

      <Button title="ColorScreen" onPress={()=>{
        navigate("Color")
      }}/>

  <Button title="ColorBox" onPress={()=>{
        navigate("ColorBox")
      }}/>

      <Button title="Reducer" onPress={()=>{
        props.navigation.navigate("Reducer")
      }}/>

      <Button title="Display Name" onPress={()=>{
        props.navigation.navigate("DisplayName")
      }}/>

      <Button title="ScreenLayout" onPress={()=>{
        props.navigation.navigate("ScreenLayout")
      }}/>

      <Button title="ScreenActivity" onPress={()=>{
        props.navigation.navigate("ScreenActivity")
      }}/>
    </View>

  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
