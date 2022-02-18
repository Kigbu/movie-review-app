import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';
// import Home from './app/screens/Home';
import AppNavigator from './app/navigation/AppNavigator';

const App = () => {
    return (
        <NavigationContainer>
            {/* <View style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" />
                <Home />
            </View> */}
            <AppNavigator />
        </NavigationContainer>
    );
};

export default App;
