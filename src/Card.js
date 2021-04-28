
import { StatusBar } from 'expo-status-bar';
import { Platform, FlatList,StyleSheet, View, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements'
import * as React from 'react';
import { ListItem, Avatar} from 'react-native-elements';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { List, Colors, Surface, Text } from 'react-native-paper';
import Moment from 'moment'; 





const MyComponent = () => (
    <Surface style={styles.surface}>
        
        <Text style = {styles.text}>Herzlich Willkommen in meiner App </Text>
    </Surface>
);

export default MyComponent; 

const styles = StyleSheet.create( {
    surface: {
        flex: 1,
        height: '90%', 
        width: '90%', 
        alignItems: 'center',
        justifyContent: 'center', 
        elevation: 20, 
        marginBottom: 150,
        flexDirection: 'row', 
        flexShrink: 1
        
        
        
    },
    text: {
        fontFamily: 'sans-serif-thin',
        fontWeight: 'normal',
        
    }
});
 
    
  