
import { StatusBar } from 'expo-status-bar';
import { Platform, FlatList, StyleSheet, Text, View, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements'
import * as React from 'react';
import { ListItem, Avatar} from 'react-native-elements';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { List, Colors } from 'react-native-paper';
import Moment from 'moment'; 





const MyComponent = () => {
    const [expanded, setExpanded] = React.useState(true); 
}
const handlePress = () => setExpanded(!expanded); 


export default class Db extends React.Component {
    state = {
      data: [], 
    }
    componentWillMount() {
      this.fetchData(); 
    }
    fetchData = async () => {
      const response = await fetch('http://localhost:3000/Ph'); 
      const json = await response.json(); 
      this.setState({data: json}); 
    }
  
    keyExtractor = (x, i) => i

    
  
    renderItem = ({ item }) => ( 

        
                        <List.Section> 
                        <List.Accordion 
                            
                            theme = {{colors: { primary: '#00A1DE'}}}
                            style= {{ backgruondColor: '#00A1DE' }}
                            titleStyle = {styles.titleContainer}
                             title = {item.Name}
                           
                            
                            left= { props => <List.Icon {...props} icon = "account"  /> }>
                                <List.Item 
                                
                                titleStyle={styles.textContainer}
                                title= {item.Geburtsdatum}  left= { props => <List.Icon {...props} icon = "cake-variant"  /> }></List.Item>
                                <List.Item 
                                 
                                titleStyle={styles.textContainer}
                                title={item.hobbies} left= { props => <List.Icon {...props} icon = "table-tennis"  /> }></List.Item>
                                  </List.Accordion>
                                </List.Section>
    )
      render() {
        return (
            <FlatList 
              keyExtractor={this.keyExtractor}
              data = {this.state.data}
              renderItem = { this.renderItem }
            />
        )
      }
     
  
  }

  const styles = StyleSheet.create({
    textContainer: {
      flex: 1,
      height: '90%', 
      width: '90%', 
    }, 
    titleContainer: {
        fontWeight: 'bold',
       
        
        
    }
    
  });
    
  