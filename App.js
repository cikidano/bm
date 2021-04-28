import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ReactDOM } from 'react-dom';
import { Header, Icon, ListItem, Avatar } from 'react-native-elements'; 
import Headers from './src/Headers';
import Footer from './src/Footer';
import Db from './src/Db';
import Card from './src/Card';

export default function App()  {
  return( 
    <SafeAreaProvider>
    <View style= {styles.container}>
        <Headers />
        <Footer/>
    </View> 
  
   
  
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
  
});
