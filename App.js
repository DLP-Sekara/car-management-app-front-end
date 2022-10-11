import { View, Text, Button } from 'react-native'
import React from 'react'

import Login from '../Nisal_car_UI/screens/Login'
import AddData from '../Nisal_car_UI/screens/AddData'
import LoadAll from '../Nisal_car_UI/screens/LoadAll'
import UpdateDelete from '../Nisal_car_UI/screens/UpdateDelete'
import Register  from '../Nisal_car_UI/screens/RegisterUser'


export default function App() {
  return (
  /*{  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AddData" component={AddData} />
        <Stack.Screen name="LoadData" component={LoadData} />
      </Stack.Navigator>
    </NavigationContainer>}*/
<LoadAll/>
  )
}