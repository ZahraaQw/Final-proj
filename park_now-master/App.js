

import React from 'react';
//import {View,Text, Button} from 'react-native';
import SignInScreen from "./screens/SignInScreen"
import Signup from "./screens/Signup"
import WelcomeScreen from './screens/WelcomeScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


const App=()=>{
  return(
    <NavigationContainer>
       <Stack.Navigator>    
      <Stack.Screen name="Welcom" component={WelcomeScreen} />
      <Stack.Screen name="Sing Up" component={Signup}   navigation="Sign In"/>
      <Stack.Screen name="Sing In" component={SignInScreen } navigation="Sign Up" />
     
      </Stack.Navigator>
      
    </NavigationContainer>

  );
}
export default App;