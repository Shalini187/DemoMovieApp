import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, SignInScreen } from '../../screens';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    </RootStack.Navigator>
);

export default RootStackScreen;