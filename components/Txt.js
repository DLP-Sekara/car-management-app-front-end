import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Txt() {
  return (
    <View>
      <Text style={style.Sample}>WELCOME</Text>
    </View>
  )
}
const style=StyleSheet.create({
    Sample:{
        color:'yellow',
        fontSize:40,
        margin:20
    }
})