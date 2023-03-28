import {ViewStyle, StyleSheet} from 'react-native';

interface Style {
  skeletonWrapper: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    skeletonWrapper: {
      width: '100%',
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#6b7280',
    },
  });
};
