import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import {
  CALENDAR,
  CHART,
  EXPENSE,
  HOME,
  LOGIN,
  MAP,
  SIGNUP,
  SUMMARY,
  TODOS,
} from '../route-paths';
import LoginScreen from '../../screens/LoginScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import HomeScreen from '../../screens/HomeScreen';
import TodoScreen from '../../screens/TodoScreen';
import CalendarScreen from '../../screens/CalendarScreen';
import ChartScreen from '../../screens/ChartScreen';
import MapScreen from '../../screens/MapScreen';
import ExpenseScreen from '../../screens/ExpenseScreen';
import SummaryScreen from '../../screens/SummaryScreen';

const Stack = createStackNavigator();

const UnAuthenticatedStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={SIGNUP} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

const AuthenticatedStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#141E30',
        },
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerLeft: (props) => (
          <Icon
            name="arrow-left"
            size={30}
            color="gray"
            style={{marginHorizontal: 10}}
            {...props}
          />
        ),
      }}
    >
      <Stack.Screen
        options={{headerShown: false}}
        name={HOME}
        component={HomeScreen}
      />
      <Stack.Screen name={TODOS} component={TodoScreen} />
      <Stack.Screen name={CALENDAR} component={CalendarScreen} />
      <Stack.Screen name={CHART} component={ChartScreen} />
      <Stack.Screen name={MAP} component={MapScreen} />
      <Stack.Screen name={EXPENSE} component={ExpenseScreen} />
      <Stack.Screen name={SUMMARY} component={SummaryScreen} />
    </Stack.Navigator>
  );
};

export {UnAuthenticatedStack, AuthenticatedStack};
