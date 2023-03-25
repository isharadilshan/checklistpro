import React, { memo } from 'react';
import { Image } from 'react-native';
import createStyle from './style';
import { Center } from 'native-base';

const Logo: React.FC = () => {
  const styles = createStyle();
  return (
    <Center style={styles.wrapper}>
      <Image
        source={require('../../../assets/logo/logo.png')}
        style={styles.image}
      />
    </Center>
  );
};

export default memo(Logo);
