import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenB } from './src/ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigator } from './src/BottomTabNavigator';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


 //export default function App() {
 //  return (
 //    <NavigationContainer>
 //        <Stack.Navigator>
 //            <Stack.Screen name= 'ScreenA' component={ScreenA}/>
 //            <Stack.Screen name='ScreenB' component={ScreenB}/>
 //            <Stack.Screen name= 'Nested' component={ NestedStackNavigation}/>
 //        </Stack.Navigator>
 //    </NavigationContainer>
//
 //  );
 // }

export default function App() {
  return (
    
   <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name={'NestedBottomTab'} component={BottomTabNavigator} />
          <Stack.Screen name='ScreenB' component={ScreenB}/>
       </Stack.Navigator>
    </NavigationContainer>   
  ) 
}



