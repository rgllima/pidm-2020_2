import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./src/Home";
import Sobre from "./src/Sobre";
import Cadastro from "./src/Cadastro";
import Perfil from "./src/Perfil";
import IMC from "./src/IMC";
import Resultado from "./src/Resultado";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Cadastro" component={Cadastro} />
      <MainStack.Screen name="IMC" component={IMC} />
      <MainStack.Screen name="Resultado" component={Resultado} />
      <MainStack.Screen name="Sobre" component={Sobre} />
    </MainStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator options={{ mode: "modal" }}>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />

        <RootStack.Screen name="Perfil" component={Perfil} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
