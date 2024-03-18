import React from 'react';
import {  View, useColorScheme, StatusBar } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './pages/LoginPage';
import SeriesPage from './pages/SeriesPage';
import SerieDetailPage from './pages/SerieDetailPage';
import SerieFormPage from './pages/SerieFormPage';

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

function SerieDetailScreen({ route }) {
  const { serie } = route.params;

  return (
    <View>
      <SerieDetailPage serie={serie} />
    </View>
  );
}

function SerieFormScreen () {
  return (
    <View>
      <SerieFormPage />
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
          <Stack.Screen name="SerieForm" component={SerieFormScreen} options={{ title: 'Nova Série'}}/>
          <Stack.Screen name="SerieDetail" component={SerieDetailScreen} options={({ route }) => ({ title: route.params.serie.title })} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Bem-Vindo!'}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
