import {View, TextInput, StyleSheet} from 'react-native'
import React, {FC} from "react"

interface Props{
    placeholder: string;
    onChangeText: (text: string)=>void;
    value: string;
}
const Input : FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1, justifyContent: "flex-start", paddingTop: 100}}>
                <TextInput
                    style={{padding: 5}} 
                    placeholderTextColor='#556' 
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText} 
                />
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems:"baseline"
    }}
)