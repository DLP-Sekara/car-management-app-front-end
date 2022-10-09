import { View,StyleSheet, Alert,TouchableOpacity } from 'react-native'
import { NativeBaseProvider,VStack, Box,Button,TextArea,Input,Text } from "native-base";
import React, { useState } from 'react'

export default function AddData() {

 const[carNo,setCarNo]=useState('')
 const[brand,setBrand]=useState('')
 const[model,setModel]=useState('')
 const[color,setColor]=useState('')
 const[price,setPrice]=useState('')

const saveData=()=>{
    fetch('http://localhost:4000/car', {
  method: 'POST',
  body: JSON.stringify({
    carNo: carNo,
    brand: brand, 
    model: model,
    color:color,
    price :price
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) =>{Alert.alert("save success")})
  .catch((err) => {Alert.alert("Error occured")});
}


  return (
    <NativeBaseProvider >
      <View style={styles.container}>
        <Text bold 
        fontSize="40"  
        mb={'20%'}
        style={{color: "#2c2c54"}}>Add Vehicle</Text>
    
    <VStack mb={'50%'} space={4}  color={'black'} alignItems="center">
    <Input borderColor={'#84817a'} color={'black'} size="md" width={'80%'}placeholder="Car No" value={carNo} onChangeText={(e)=>{setCarNo(e)}}/>
    <Input   borderColor={'#84817a'} color={'black'} size="md" width={'80%'}placeholder="Brand" value={brand} onChangeText={(e)=>{setBrand(e)}}/>
    <Input   borderColor={'#84817a'} color={'black'} size="md" width={'80%'}placeholder="Model" value={model} onChangeText={(e)=>{setModel(e)}}/>
    <Input   borderColor={'#84817a'} color={'black'} size="md" width={'80%'}placeholder="Color" value={color} onChangeText={(e)=>{setColor(e)}}/>
    <Input   borderColor={'#84817a'} color={'black'} size="md" width={'80%'}placeholder="Price" value={price} onChangeText={(e)=>{setPrice(e)}}/>
    <TouchableOpacity style={styles.btn} onPress={(saveData)}>
        <Text style={{color:'black',fontSize:20,width:200,textAlign:'center'}}>Add Vehicle</Text>
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