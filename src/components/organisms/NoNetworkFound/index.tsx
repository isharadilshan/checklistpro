import React, {useEffect, useState} from 'react';
import {AlertDialog, Button} from 'native-base';
import NetInfo from '@react-native-community/netinfo';
import {Linking} from 'react-native';
import createStyles from './styles';

const NoNetworkFound: React.FC = () => {
  const [noNetworkState, setNoNetworkState] = useState<boolean>(false);
  const [userDismissed, setUserDismissed] = useState<boolean>(false);
  const cancelRef = React.useRef(null);
  const styles = createStyles();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        setNoNetworkState(false);
      } else {
        setNoNetworkState(true);
      }
    });
    return unsubscribe();
  }, []);

  const reCheck = () => {
    NetInfo.fetch().then((state) => {
      if (state.isConnected) {
        setNoNetworkState(false);
      } else {
        setNoNetworkState(true);
      }
    });
  };

  const openSettings = () => {
    Linking.openURL('app-settings:');
  };

  return (
    <AlertDialog
      leastDestructiveRef={cancelRef}
      isOpen={noNetworkState && !userDismissed}
      onClose={() => setUserDismissed(true)}
    >
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header style={styles.alertHeader}>
          {'Network Error'}
        </AlertDialog.Header>
        <AlertDialog.Body>
          {'Please check your internet connection and try again!'}
        </AlertDialog.Body>
        <AlertDialog.Footer style={styles.alertFooter}>
          <Button.Group space={2}>
            <Button variant="unstyled" onPress={reCheck} ref={cancelRef}>
              Retry
            </Button>
            <Button colorScheme="danger" onPress={openSettings}>
              Settings
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};

export default NoNetworkFound;
