import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, Icon, ListItem, Avatar } from 'react-native-elements'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Db from './Db';
import Card from './Card';

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Card/>
      </View>
    );
  }

  function MitarbeiterScreen() {
    return (
      <View style = {styles.db}>
        <Db />
      </View>
    );
  }

  const styles = StyleSheet.create({
    db: {
      flex: 1,

    }
    
  });

const Tab = createBottomTabNavigator();



export default class Footer extends React.Component {

    render() {
        return ( 
            <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Mitarbeiter') {
              iconName = 'people';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'lightgray',
          style: {
            backgroundColor: '#00A1DE', 
        }}}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Mitarbeiter" component={MitarbeiterScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    );
    } 
    }