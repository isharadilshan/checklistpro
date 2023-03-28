import React, {useEffect} from 'react';
import {Alert, View} from 'react-native';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';

interface Error {
  name: string;
  message: string;
  stack?: string;
}

const GlobalExceptionHandler: React.FC = () => {
  const jsErrorHandler = (e: Error, isFatal: boolean) => {
    if (isFatal) {
      Alert.alert(
        'An unexpected error occurred',
        `Error: ${e.name} ${e.message}\n We have reported this! Please close the app and start again!`,
        [
          {
            text: 'Close',
          },
        ],
      );
    }
  };

  const nativeErrorHandler = (error: string) => {
    Alert.alert(
      'An unexpected error occurred',
      `Error: ${error}\n We have reported this! Please close the app and start again!`,
      [
        {
          text: 'Close',
        },
      ],
    );
  };

  useEffect(() => {
    setJSExceptionHandler(jsErrorHandler, true);
    if (!__DEV__) {
      setNativeExceptionHandler(nativeErrorHandler);
    }
  }, []);

  return <View />;
};

export default GlobalExceptionHandler;
