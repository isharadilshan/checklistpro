import {ViewStyle, StyleSheet} from 'react-native';

interface Style {
  cardWrapper: ViewStyle;
  textWrapper: ViewStyle;
  buttonWrapper: ViewStyle;
  iconStyle: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    cardWrapper: {
      height: 150,
      borderWidth: 1,
      borderRadius: 4,
      padding: 10,
      marginVertical: 10,
      overflow: 'hidden',
      borderColor: '#e5e7eb',
      backgroundColor: '#1f2937',
    },
    textWrapper: {
      flex: 1,
      justifyContent: 'space-between',
    },
    buttonWrapper: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    iconStyle: {
      color: '#94a3b8',
    },
  });
};
