import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./src/Home";
import StudentView from "./src/EditStudent";
import Register from "./src/Register";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" options={{headerTitleAlign: "center"}} component={Home} />
    </MainStack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator options={{ mode: "modal" }}>
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{ headerShown: false }}
          />

          <MainStack.Screen
            name="StudentView"
            options={{headerTitleAlign: "center", title: "Detalhes do Estudante"}}
            component={StudentView}
          />
          <MainStack.Screen
            name="Register"
            options={{headerTitleAlign: "center", title: "Adicionar Estudante"}}
            component={Register}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
