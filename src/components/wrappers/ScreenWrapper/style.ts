import { ViewStyle, StyleSheet } from 'react-native';

interface Style {
  wrapperStyle: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    wrapperStyle: {
      flex: 1,
      backgroundColor: '#141E30',
    },
  });
};
