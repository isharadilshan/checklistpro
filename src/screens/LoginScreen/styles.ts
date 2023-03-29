import {ViewStyle, TextStyle, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

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
      backgroundColor: Colors.primary,
    },
    textWrapper: {
      flexDirection: 'row',
      marginTop: 20,
    },
    normalText: {
      color: Colors.textGray,
    },
    highlightText: {
      color: Colors.highlightRed,
    },
  });
};
