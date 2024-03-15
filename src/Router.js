import React from 'react';
import {  View, useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './pages/LoginPage';
import SeriesPage from './pages/SeriesPage';

const Stack = createNativeStackNavigator();


function LoginScreen(){

  return (
    <View>
      <LoginPage />
    </View>
  );
}



export default function Router() {

  const scheme = useColorScheme();

  return (
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator
        screenOptions={{
          title: "Séries!",
          headerTitleStyle: {
            fontSize: 25,
          }
        }}>
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Bem Vindo!'}}/>

          
        </Stack.Navigator>
      </NavigationContainer>
  );
}
