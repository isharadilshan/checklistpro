import React from 'react';
import { View } from 'react-native';
import createStyle from './style';

interface ScreenWrapperProps {
  children: React.ReactNode;
  noPaddings?: boolean;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  noPaddings,
}) => {
  const styles = createStyle();
  return (
    <View
      style={[styles.wrapperStyle, { paddingHorizontal: noPaddings ? 0 : 16 }]}
    >
      {children}
    </View>
  );
};

export default ScreenWrapper;
