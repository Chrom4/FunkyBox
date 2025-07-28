import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Button } from 'react-native';
import OpenScreen from './src/openScreen';
import LoginScreen from './src/loginScreen';
import CadastroScreen from './src/cadastroScreen';
import HistoryScreen from './src/historyScreen';
import ProfileScreen from './src/profileScreen';
import GameScreen from './src/gameScreen';
import AboutUsScreen from './src/aboutUsScreen';
import { useTheme } from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="OpenScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OpenScreen" component={OpenScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
    </Stack.Navigator>
  );
};

const HistoryStack = () => {
  return (
    <Stack.Navigator initialRouteName="HistoryScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
      <Stack.Screen name="GameScreen" component={GameScreen} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="HistoryStack">
      
      <Drawer.Screen name="História do Funk" component={HistoryStack}/>
      <Stack.Screen name="GameScreen" component={GameScreen} options={{headerStyle: {backgroundColor: '#A0BEEC'}}}/>
      <Drawer.Screen name="Perfil" component={ProfileScreen} 
      options={{ headerStyle: {backgroundColor: '#A0BEEC'}}}/>
      <Stack.Screen name="Sobre nós" component={AboutUsScreen} options={{headerStyle: {backgroundColor: '#A0BEEC'}}}/>
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthStack" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
