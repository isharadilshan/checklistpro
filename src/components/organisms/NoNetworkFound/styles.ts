import {ViewStyle, StyleSheet} from 'react-native';

interface Style {
  alertHeader: ViewStyle;
  alertFooter: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    alertHeader: {
      borderBottomWidth: 0,
    },
    alertFooter: {
      borderTopWidth: 0,
    },
  });
};
