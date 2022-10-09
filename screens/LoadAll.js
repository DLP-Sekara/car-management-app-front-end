import { View, Text,StyleSheet,StatusBar,FlatList,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function LoadAll() {

const[posts,setPosts]=useState([])

    useEffect(()=>{
      fetch('http:/192.168.1.101:3000/car')
   .then((response) => response.json())
  .then((json) => console.log(json));
      
    })

    return (
      <View style={{padding:20}}>
          <FlatList
              data={posts}
              renderItem={({ vahicle }) =>
                  <TouchableOpacity style={{borderColor:'white', borderWidth:1, marginBottom:'5%', padding:5}} onPress={()=>{console.log("hello");}}>
                      <Text style={{marginBottom:10,fontWeight:'bold'}} >{vahicle.brand}</Text>
                      <Text style={{marginBottom:10}} >{vahicle.model}</Text>
                      <Text style={{marginBottom:10}} >{vahicle.color}</Text>
                      <Text style={{marginBottom:10}} >{vahicle.price}</Text>
                  </TouchableOpacity>
              }
          />
      </View>
  )
}
