import React, { useEffect,useState } from 'react'
import { NativeBaseProvider, Text, Input, VStack, Button } from 'native-base'

export default function UpdateDelete () {
  const[title,setTitle]=useState('')
  const[body,setBody]=useState('')
  const[userId,setUserId]=useState('')

  useEffect(()=>{
  
  })
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
   > Save Data
     
    </Button>

    </VStack>

    </NativeBaseProvider>
  )
}