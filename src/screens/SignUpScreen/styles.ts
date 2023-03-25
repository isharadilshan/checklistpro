import {ViewStyle, StyleSheet, TextStyle} from 'react-native';

interface Style {
  screenWrapper: ViewStyle;
  textWrapper: ViewStyle;
  normalText: TextStyle;
  highlightText: TextStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    screenWrapper: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: '#141E30',
    },
    textWrapper: {
      flexDirection: 'row',
      marginTop: 20,
    },
    normalText: {
      color: '#737373',
    },
    highlightText: {
      color: '#ef4444',
    },
  });
};
