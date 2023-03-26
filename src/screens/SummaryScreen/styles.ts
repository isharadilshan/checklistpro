import {StyleSheet, TextStyle} from 'react-native';

interface Style {
  emptyText: TextStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    emptyText: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
