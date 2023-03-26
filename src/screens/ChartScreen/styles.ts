import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  chartWrapper: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    chartWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
