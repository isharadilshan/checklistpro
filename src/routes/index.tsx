import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {AuthenticatedStack, UnAuthenticatedStack} from './StackNavigator';

const Routes: React.FC = () => {
  //@ts-ignore
  const isAuthenticated = useSelector(({auth}) => auth?.isAuthenticated);

  return (
    <NavigationContainer>
      {!isAuthenticated ? <AuthenticatedStack /> : <UnAuthenticatedStack />}
    </NavigationContainer>
  );
};

export default Routes;
