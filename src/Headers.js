import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header, Icon, ListItem, Avatar } from 'react-native-elements'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LogoTitle() {
    return (
      <Image
        style={{ width: 60, height: 60 }}
        source={{uri: 'https://onlinemarketing.de/wp-content/uploads/2018/01/logo-bricks-250x0-c-default.png'}}
      />
    );
  }

function DetailsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      </View>
    );
  }
  
const Stack = createStackNavigator();
export default class Headers extends React.Component {

render() {
    return ( 
        <NavigationContainer>
        <Stack.Navigator>
             <Stack.Screen 
                name="HEADER" 
                component={DetailsScreen} 
                options={{
                headerTitle: props => <LogoTitle {...props} />,
                title: 'BRICKMAKERS',
                headerStyle: {
                backgroundColor: '#00A1DE',
                opacity: '100%'
                },
            headerTintColor: '#fff',
         }}
     />    
 </Stack.Navigator>
 </NavigationContainer>
);
} 
}