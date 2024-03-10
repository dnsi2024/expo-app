// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './FirstPage';
import WelcomeScreen from './WelcomeScreen';
import MotivationalQuoteScreen from './MotivationalQuoteScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MotivationalQuotes" component={MotivationalQuoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
