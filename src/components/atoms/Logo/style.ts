import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
interface Style {
  wrapper: ViewStyle;
  image: ImageStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    wrapper: {
      marginVertical: 100,
    },
    image: {
      width: 128,
      height: 128,
      marginBottom: 12,
    },
  });
};
