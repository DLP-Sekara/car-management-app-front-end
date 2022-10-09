import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { color } from 'native-base/lib/typescript/theme/styled-system';

export default function Login() {
  return (
    <View style={styles.container}>
     <Image style={styles.img} source={require('../assets/v12.png')} />

      <TextInput style={styles.input1} placeholder='Username'/>
      <TextInput style={styles.input2} placeholder='Password'/>
      <TouchableOpacity
        style={styles.btn}
      >
        <Text style={{color:'#ffff',fontSize:20}}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.baseText}>Sign in</Text>
    </View>
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
        marginTop:'5%',
        borderRadius:100

    },
    img:{
      marginBottom:'20%',
    },
    baseText:{
      color:'black',
      fontSize:15,
      marginTop:'5%',
    }
});