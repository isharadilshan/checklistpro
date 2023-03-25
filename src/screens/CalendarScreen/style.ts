import { ViewStyle, StyleSheet } from 'react-native';

interface Style {
  item: ViewStyle;
  emptyDate: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17,
    },
    emptyDate: {
      height: 15,
      flex: 1,
      paddingTop: 30,
    },
  });
};
