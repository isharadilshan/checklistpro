import {ViewStyle, StyleSheet} from 'react-native';

interface Style {
  cardWrapper: ViewStyle;
  taglineWrapper: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    cardWrapper: {
      borderWidth: 1,
      borderRadius: 4,
      margin: 10,
      overflow: 'hidden',
      borderColor: '#e5e7eb',
      backgroundColor: '#e5e7eb',
    },
    taglineWrapper: {
      bottom: 0,
      paddingVertical: 2,
      paddingHorizontal: 6,
      position: 'absolute',
      backgroundColor: '#7c3aed',
    },
  });
};
