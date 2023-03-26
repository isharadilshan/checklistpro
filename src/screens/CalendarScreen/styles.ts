import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

interface Style {
  emptyDataWrapper: ViewStyle;
  emptyDataText: TextStyle;
  emptyDate: ViewStyle;
  emptyDateText: TextStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    emptyDataWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyDataText: {
      fontSize: 16,
      color: '#94a3b8',
    },
    emptyDate: {
      flex: 1,
      paddingTop: 30,
      height: 50,
    },
    emptyDateText: {
      fontSize: 16,
      color: '#94a3b8',
    },
  });
};
