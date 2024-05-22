import React from 'react'
import { View } from 'react-native'
import FirstProgram from './Components/FirstProgram/FirstProgram'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

const Main = () => {
  // const Stack = createStackNavigator();
  return (
    <> 
{/* <NavigationContainer> */}
      {/* <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={FirstProgram} />
      </Stack.Navigator>
    </NavigationContainer> */}
   <View>
        <FirstProgram/>
   </View>
    </>
  )
}

export default Main