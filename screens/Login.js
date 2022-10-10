import { View, Text,TextInput,Button,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import { color } from 'native-base/lib/typescript/theme/styled-system';
import WelcomeTxt from '../components/Txt'

export default function Login() {

  
 const[username,setUsername]=useState('')
 const[password,setPassword]=useState('')

 const checkData=()=>{
  fetch('http:/192.168.1.101:3000/user/'+username+'/'+password, {
    method: 'GET',
})
  // .then((response) => {navigation.navigater("Dashboard");})
  .then((response) =>{
    if(response.status==400){Alert.alert("Password Incorrect.")}
    if(response.status==200){()=>{Alert.alert("Password Correct.")}}
  })
  .then((json) =>console.log(json))
 }
  return (
    <View style={styles.container}>
      <WelcomeTxt style={styles.welcomeTxt}/>
     <Image style={styles.img} source={require('../assets/v12.png')} />

      <TextInput style={styles.input1} placeholder='Username' 
      value={username}  
      onChangeText={(e)=>{setUsername(e)}}/>

      <TextInput style={styles.input2} secureTextEntry={true} placeholder='Password' 
      value={password} 
      onChangeText={(e)=>{setPassword(e)}}/>

      <TouchableOpacity
        style={styles.btn}
        onPress={(checkData)}
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
    },
    welcomeTxt:{
      color:'black',
        fontSize:40,
        margin:20
    }
});