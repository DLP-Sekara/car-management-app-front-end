import { View,StyleSheet, Alert,TouchableOpacity } from 'react-native'
import { NativeBaseProvider,VStack, Box,Button,TextArea,Input,Text } from "native-base";
import React, { useState } from 'react'

export default function AddData() {

 const[id,setId]=useState('')
 const[name,setName]=useState('')
 const[address,setAddress]=useState('')
 const[contact,setContact]=useState('')

const saveData=()=>{
    fetch('http:/192.168.1.101:3000/user', {
  method: 'POST',
  body: JSON.stringify({
    id: id,
    name: name, 
    address: address,
    contact:contact
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) =>{Alert.alert("save success")
  setId('');
  setName('');
  setAddress('');
  setContact('');
})
  .catch((err) => {Alert.alert("Error occured :","Error")});
}


  return (
    <NativeBaseProvider >
      <View style={styles.container}>
        <Text bold 
        fontSize="40"  
        mb={'40%'}
        style={{color: "#2c2c54"}}>Register</Text>
    
    <VStack mb={'50%'} space={4}  color={'black'} alignItems="center">
    <Input borderColor={'#84817a'} color={'black'} size="md" width={'80%'}placeholder="Id" value={id} onChangeText={(e)=>{setId(e)}}/>
    <Input   borderColor={'#84817a'} color={'black'} size="md" width={'80%'}placeholder="Name" value={name} onChangeText={(e)=>{setName(e)}}/>
    <Input   borderColor={'#84817a'} color={'black'} size="md" width={'80%'}placeholder="Address" value={address} onChangeText={(e)=>{setAddress(e)}}/>
    <Input   borderColor={'#84817a'} color={'black'} size="md" width={'80%'}placeholder="Contact" value={contact} onChangeText={(e)=>{setContact(e)}}/>
    <TouchableOpacity style={styles.btn} onPress={(saveData)}>
        <Text style={{color:'black',fontSize:20,width:200,textAlign:'center'}}>Register</Text>
      </TouchableOpacity>

    </VStack>
    </View>
    </NativeBaseProvider>
  )
}
const styles = StyleSheet.create({
  input1:{
      marginTop:'2%',
      borderWidth: 1,
      padding: 10,
      width:'80%',
      borderRadius:100,
      backgroundColor:'black',
      borderColor: 'black',
      color:'white',
      fontSize:15
  },
  input2:{
      marginTop:'5%',
      borderWidth: 1,
      padding: 10,
      width:'80%',
      borderRadius:100,backgroundColor:'black',
      borderColor: 'black',
      color:'white',
      fontSize:15
  },
  container:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f7f1e3',
    height:'100%'
   },
   btn:{
    width:'100%',
    padding:5,
    backgroundColor:"#ffb142",
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:'5%',
    borderRadius:10

},
})