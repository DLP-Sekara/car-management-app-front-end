import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input1} placeholder='Username'/>
      <TextInput style={styles.input2} placeholder='Password'/>
      <TouchableOpacity
        style={styles.btn}
      >
        <Text style={{color:'#ffff',fontSize:20}}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input1:{
        marginTop:'40%',
        borderWidth: 1,
        padding: 10,
        width:'80%',
        borderRadius:100,
        borderColor: 'black',
        color:'red'
    },
    input2:{
        marginTop:'5%',
        borderWidth: 1,
        padding: 10,
        width:'80%',
        borderRadius:100,
        borderColor: 'black'
    },
    container:{
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:'white',
     height:'100%'
    },
    btn:{
        width:'60%',
        padding:5,
        backgroundColor:"green",
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:'3%',
        borderRadius:100

    }
});