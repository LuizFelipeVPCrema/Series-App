import React from 'react';
import {  View, useColorScheme, StatusBar } from 'react-native';
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

function SeriesScreen() {
  return (
    <View>
      <SeriesPage />
    </View>
  );
}



export default function Router() {

  const scheme = useColorScheme();

  return (
      <NavigationContainer theme={DarkTheme}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Stack.Navigator
        screenOptions={{
          title: "Séries!",
          headerTitleStyle: {
            fontSize: 25,
          }
        }}>
          <Stack.Screen name="Series" component={SeriesScreen} options={{ title: 'Séries'}}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Bem-Vindo!'}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
