import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import type {ReactNode} from 'react';
import {NativeBaseProvider} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
// import NoNetworkFound from './components/organism/NoNetworkFound';
import redux from './redux/store';
import Routes from './routes';
import {DefaultTheme} from './theme';
import GlobalExceptionHandler from './components/organisms/GlobalExceptionHandler';

const App: () => ReactNode = () => {
  useEffect(() => {
    //added timeout to demonstrate splash screen can remove in production
    const timer = setTimeout(() => SplashScreen.hide(), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={redux.store}>
      <NativeBaseProvider>
        <GlobalExceptionHandler />
        {/* <NoNetworkFound /> */}
        <Routes />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
