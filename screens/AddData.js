import { View,StyleSheet, Alert } from 'react-native'
import { NativeBaseProvider,VStack, Box,Button,TextArea,Input,Text } from "native-base";
import React, { useState } from 'react'

export default function AddData() {

 const[title,setTitle]=useState('')
 const[body,setBody]=useState('')
 const[userId,setUserId]=useState('')

const saveData=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: body, 
    userId: userId,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) =>{Alert.alert("save success")})
  .catch((err) => {Alert.alert("Error occured")});
}


  return (
    <NativeBaseProvider>
        <Text bold 
        fontSize="3xl" 
        mt={'10%'} ml={'30%'} 
        style={{color: "red"}}>Save Post</Text>
    
    <VStack mt={'10%'} space={4} alignItems="center">
    <Input  color={'white'} size="md" width={'80%'}placeholder="Title" value={title} onChangeText={(e)=>{setTitle(e)}}/>
    <Input   color={'white'} size="md" width={'80%'}placeholder="body" value={body} onChangeText={(e)=>{setBody(e)}}/>
    <Input   color={'white'} size="md" width={'80%'}placeholder="UserID" value={userId} onChangeText={(e)=>{setUserId(e)}}/>
    <Button size="sm" colorScheme="secondary" 
    onPress={saveData}> Save Data
     
    </Button>

    <Button size="sm" colorScheme="primary" 
    onPress={console.log("hello")}> go home
     
    </Button>
    </VStack>

    </NativeBaseProvider>
  )
}