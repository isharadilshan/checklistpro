import {ViewStyle, StyleSheet} from 'react-native';

interface Style {
  modalContent: ViewStyle;
  modalHeader: ViewStyle;
  modalFooter: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    modalContent: {
      backgroundColor: '#141E30',
    },
    modalHeader: {
      borderBottomWidth: 0,
      backgroundColor: '#141E30',
    },
    modalFooter: {
      borderTopWidth: 0,
      backgroundColor: '#141E30',
    },
  });
};
