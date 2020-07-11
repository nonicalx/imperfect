import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './AuthLogin';
import Home from './Home';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen name="login" component={AuthScreen} />
                <Stack.Screen name="home" component={Home} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
