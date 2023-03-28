import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React, {useEffect} from 'react';
import type {ReactNode} from 'react';
import {NativeBaseProvider} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import theme from './theme';
import NoNetworkFound from './components/organisms/NoNetworkFound';
import redux from './redux/store';
import Routes from './routes';
import GlobalExceptionHandler from './components/organisms/GlobalExceptionHandler';

const App: () => ReactNode = () => {
  useEffect(() => {
    //added timeout to demonstrate splash screen can remove in production
    const timer = setTimeout(() => SplashScreen.hide(), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={redux.store}>
      <NativeBaseProvider theme={theme}>
        <GlobalExceptionHandler />
        <NoNetworkFound />
        <Routes />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
