import {ViewStyle, TextStyle, StyleSheet} from 'react-native';

interface Style {
  searchInput: ViewStyle;
  searchIcon: ViewStyle;
  emptyText: ViewStyle;
  fabIcon: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    searchInput: {
      color: '#e5e7eb',
      marginVertical: 5,
    },
    searchIcon: {
      marginLeft: 10,
      color: '#e5e7eb',
    },
    emptyText: {
      flex: 1,
      height: 600,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fabIcon: {
      color: '#ffffff',
    },
  });
};
