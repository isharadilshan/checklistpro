import { ViewStyle, StyleSheet } from 'react-native';

interface Style {
  contentWrapper: ViewStyle;
  cardWrapper: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    contentWrapper: {
      flex: 1,
      justifyContent: 'center',
    },
    cardWrapper: {
      flexDirection: 'row',
    },
  });
};
