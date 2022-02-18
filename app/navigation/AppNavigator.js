import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Details from '../screens/Details/Detail';
import Header from '../components/Header';
import Search from '../screens/Search/Search';
import SplashScreen from 'react-native-splash-screen';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
    //Hide Splash screen on app load.
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                // headerShown: true,
                headerTransparent: true,
                headerStyle: {
                    backgroundColor: 'transparent',
                },
            }}
            headerMode={'screen'}>
            <Screen
                name="Home"
                component={Home}
                options={{
                    // title: false,
                    headerShown: true,
                    headerTransparent: true,
                    headerTintColor: 'transparent',
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                    header: ({ navigation, route, options }) => (
                        <Header
                            main={true}
                            navigation={navigation}
                            route={route}
                            options={options}
                        />
                    ),
                }}
            />
            <Screen
                name="Movie Details"
                component={Details}
                options={{
                    headerTransparent: true,
                    header: ({ navigation, route, options }) => (
                        <Header
                            main={false}
                            navigation={navigation}
                            route={route}
                            options={options}
                        />
                    ),
                }}
            />
            <Screen
                name="Search"
                component={Search}
                options={{
                    headerTransparent: true,
                    header: ({ navigation, route, options }) => (
                        <Header
                            main={false}
                            navigation={navigation}
                            route={route}
                            options={options}
                        />
                    ),
                }}
            />
        </Navigator>
    );
};

export default AppNavigator;
