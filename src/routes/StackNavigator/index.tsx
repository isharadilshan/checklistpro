import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import {
  CALENDAR,
  CHART,
  EXPENSE,
  EXPENSE_SUMMARY,
  HOME,
  LOGIN,
  SIGNUP,
  TODOS,
  TODO_SUMMARY,
} from '../route-paths';
import LoginScreen from '../../screens/LoginScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import HomeScreen from '../../screens/HomeScreen';
import TodoScreen from '../../screens/TodoScreen';
import CalendarScreen from '../../screens/CalendarScreen';
import ChartScreen from '../../screens/ChartScreen';
import ExpenseScreen from '../../screens/ExpenseScreen';
import ExpenseSummaryScreen from '../../screens/ExpenseSummaryScreen';
import TodoSummaryScreen from '../../screens/TodoSummaryScreen';
import createStyle from './styles';

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
  const styles = createStyle();

  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: 'white',
        headerBackTitleVisible: false,
        headerShadowVisible: false,
        headerLeft: (props) => (
          <Icon
            name="arrow-left"
            size={30}
            style={styles.backIcon}
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
      <Stack.Screen name={EXPENSE} component={ExpenseScreen} />
      <Stack.Screen name={EXPENSE_SUMMARY} component={ExpenseSummaryScreen} />
      <Stack.Screen name={TODO_SUMMARY} component={TodoSummaryScreen} />
    </Stack.Navigator>
  );
};

export {UnAuthenticatedStack, AuthenticatedStack};
