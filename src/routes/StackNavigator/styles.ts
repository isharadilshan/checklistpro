import {ViewStyle, StyleSheet} from 'react-native';

interface Style {
  header: ViewStyle;
  backIcon: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    header: {
      backgroundColor: '#141E30',
    },
    backIcon: {
      marginHorizontal: 10,
      color: '#94a3b8',
    },
  });
};
