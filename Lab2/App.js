import React from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    createAppContainer
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';
import InputScreen from './InputScreen.js'
import OpenInSafari from './OpenInSafari.js'
const MainNavigator = createStackNavigator({
    Home: {
        screen: InputScreen
    },
    Open: {
        screen: OpenInSafari
    },
});

const App = createAppContainer(MainNavigator);

export default App;