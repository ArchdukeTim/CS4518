/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AsyncStorage from '@react-native-community/async-storage';

setValue = async (key, val) => {
  try {
    await AsyncStorage.setItem(key, val)
  } catch(e) {
    // save error
  }
}


class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: ["", "", ""]
        }
    }

    componentDidMount() {
        AsyncStorage.getItem("@items").then((items) => {
            console.log(items)
            this.setState({items: JSON.parse(items)})
        })
        
    }

    async componentWillUnmount() {
        console.log(JSON.stringify(this.state.items))
        await AsyncStorage.setItem("@items", JSON.stringify(this.state.items))
    }
    async function addTodo() {
    await ref.add({
      items: JSON.stringify(this.state.items),
    });
  }

    render() {
return (
<View style={{  flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    {this.state.items.map((value, index) => {
        return <TextInput style={{height: 40, width: '100%', borderRadius: 4,
          borderWidth: 3,
          borderColor: '#d6d7da', color: 'black'}} onChangeText={(text) => {
              let newItems = this.state.items.slice()
              newItems[index] = text
              this.setState({items: newItems})
              AsyncStorage.setItem("@items", JSON.stringify(this.state.items))
          }}
          value={value}
          ref={input => { this.textInput = input }}
          />
    })}
</View>
);

}}

class SettingsScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            darkMode : false
        }
        const loadDarkMode = async () => {
          try {
            const value = await AsyncStorage.getItem('@dark-mode')
            this.setState({darkMode: value})
            console.log(value)
          } catch(e) {
            // read error
        }
          
      }
      loadDarkMode()
  }
    render() {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Switch value={this.state.darkMode} onValueChange={(val) => this.setState({darkMode: val})}/>
        </View>
        );
    }
}

const Tab = createBottomTabNavigator();


export default class App extends Component {

render() {
  return (
    <>
    <Appbar>
  <Appbar.Content title={'Shopping List'} />
</Appbar>
    <NavigationContainer>
   <Tab.Navigator>
     <Tab.Screen name="Home" component={HomeScreen} />
     <Tab.Screen name="Settings" component={SettingsScreen} />
   </Tab.Navigator>
 </NavigationContainer>
    </>
  );
}
};

const styles = StyleSheet.create({
 
});
