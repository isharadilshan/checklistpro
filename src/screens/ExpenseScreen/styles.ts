import {ViewStyle, TextStyle, StyleSheet} from 'react-native';
import {Colors} from '../../theme/colors';

interface Style {
  searchInput: ViewStyle;
  searchIcon: ViewStyle;
  emptyText: ViewStyle;
  fabIcon: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    searchInput: {
      color: Colors.textWhite,
      marginVertical: 5,
    },
    searchIcon: {
      marginLeft: 10,
      color: Colors.textWhite,
    },
    emptyText: {
      flex: 1,
      height: 600,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fabIcon: {
      color: Colors.textWhite,
    },
  });
};
