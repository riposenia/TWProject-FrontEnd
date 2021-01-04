import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from "./Screens/Root";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePacient from './Screens/HomePacient';
import Formular from './Screens/Formular';
import ListaProg from './Screens/ListaProg';
import HomeDoctor from './Screens/HomeDoctor';
import ProgramariDoctor from './Screens/ProgramariDoctor';
import Consulta from './Screens/Consulta';
import { Image } from 'native-base';
import HomeAsistenta from './Screens/HomeAsistenta';
import GestioneazaPacienti from './Screens/GestioneazaPacienti';
import GestioneazaProgrmari from './Screens/GestioneazaProgramari';
import PrezentareDoctori from './Screens/PrezentareDoctori'



const Stack= createStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Root"> 
    <Stack.Screen name="Root" options={{ title:'HealthCare', headerTitleStyle:{color:'red', fontSize:25, alignSelf:'center'}}}component={Root}/>
    <Stack.Screen name="Login" options={{ title:'HealthCare', headerTitleStyle:{color:'red', fontSize:25, alignSelf:'center'}}}component={Login}/>
    <Stack.Screen name="Register" options={{ title:'HealthCare', headerTitleStyle:{color:'red', fontSize:25, alignSelf:'center'}}}component={Register}/>
    <Stack.Screen name="HomePacient" options={{ title:'HealthCare', headerTitleStyle:{color:'red', fontSize:25, alignSelf:'center'}}} component={HomePacient}/>
    <Stack.Screen name="ListaProg" options={{ title:'ListaProgramari', headerTitleStyle:{color:'red', fontSize:25, alignSelf:'center'}}} component={ListaProg}/>
    <Stack.Screen name="Formular" options={{ title:'Programare', headerTitleStyle:{color:'red', fontSize:25, alignSelf:'center'}}} component={Formular}/>
    <Stack.Screen name="HomeDoctor" options={{ title:'Doctor', headerTitleStyle:{color:'red', fontSize:25, alignSelf:'center'}}} component={HomeDoctor}/>
    <Stack.Screen name="Consulta" options={{ title:'Consultatie', headerTitleStyle:{color:'red', fontSize:25, alignSelf:'center'}}} component={Consulta}/>
    <Stack.Screen name="ProgramariDoctor" options={{ title:'ProgramariPacienti', headerTitleStyle:{color:'red', fontSize:25, alignSelf:'center'}}} component={ProgramariDoctor}/>
    <Stack.Screen name="HomeAsistenta" options={{ title:'Asistenta', headerTitleStyle:{color:'red', fontSize:25, alignSelf:'center'}}} component={HomeAsistenta}/>
    <Stack.Screen name="GestioneazaPacienti" options={{ title:'HealthCare', headerTitleStyle:{color:'red', fontSize:25, alignSelf:'center'}}} component={GestioneazaPacienti}/>
    <Stack.Screen name="GestioneazaProgramari" options={{ title:'HealthCare', headerTitleStyle:{color:'red', fontSize:25, alignSelf:'center'}}} component={GestioneazaProgrmari}/>
    <Stack.Screen name="PrezentareDoctori" options={{ title:'HealthCare', headerTitleStyle:{color:'red', fontSize:25, alignSelf:'center'}}} component={PrezentareDoctori}/>


    </Stack.Navigator>
  </NavigationContainer>
  );
}


