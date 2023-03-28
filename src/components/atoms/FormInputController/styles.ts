import {ViewStyle, StyleSheet} from 'react-native';

interface Style {
  controlWrapper: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    controlWrapper: {
      marginBottom: 10,
    },
  });
};
