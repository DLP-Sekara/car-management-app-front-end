import { View, Text,StyleSheet,StatusBar,FlatList,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function LoadAll() {

const[posts,setPosts]=useState([])

    useEffect(()=>{
      fetch('http:/192.168.1.101:3000/car')
   .then((response) => response.json())
  .then((json) => setPosts(json));
      
    })

    return (
      <View style={styles.container}>
          <FlatList
              data={posts}
              renderItem={({ item }) =>
                  <TouchableOpacity style={{borderColor:'black', borderWidth:1, marginBottom:'5%', padding:5}} onPress={()=>{console.log("hello");}}>
                       <Text style={{marginBottom:10,fontWeight:'bold',color:'#e74c3c',marginLeft:'20%'}} >{item.brand}</Text>
                      <Text style={{marginBottom:10,color:'#1B1464',marginLeft:'20%'}} >{item.carNo}</Text>           
                      <Text style={{marginBottom:10,color:'#1B1464',marginLeft:'20%'}} >{item.model}</Text>
                      <Text style={{marginBottom:10,color:'#1B1464',marginLeft:'20%'}} >{item.color}</Text>
                      <Text style={{marginBottom:10,color:'#1B1464',marginLeft:'20%'}} >{"Rs. "+item.price}</Text>
                  </TouchableOpacity>
              }
          />
      </View>
  )
}
const styles = StyleSheet.create({
    container:{
     backgroundColor:'#f7f1e3',
     height:'100%',
     padding:20
    }
});