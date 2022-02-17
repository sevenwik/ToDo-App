import {View, StyleSheet, Text, Button, TouchableHighlight, PermissionsAndroid} from 'react-native'
import React, {FC, useState} from "react"
import Input from "./input"

interface ITEM {
  name:string
}
const App : FC = () => {
  const itemadd =[{
    name:''
  }]
  const [item, setItem] = useState<string>("");
  const [AddItem, setAddItem] = useState<ITEM[]>([]);
  const changeItem = (text:string) =>{
    setItem(text)
  };
  const buttonClicked = (text: string) =>{
    console.log(text)
    setAddItem(prevItem =>[...prevItem, {name:text}]);
  };
    return (
        
        <View style={styles.container}>
            <Input placeholder='Add Item' onChangeText={changeItem} value={item}/>
            <TouchableHighlight style={{padding:150}}>
              <Button title='Click Me' onPress={()=>buttonClicked(item)}/>
            </TouchableHighlight>
             {AddItem.map((x)=>(
               <Text>
                 {x.name}
               </Text>
               ))}
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems:"baseline"
    }}
)