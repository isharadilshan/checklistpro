import {StyleSheet, ViewStyle} from 'react-native';

interface Style {
  agendaItemWrapper: ViewStyle;
  tagWrapper: ViewStyle;
}

export default () => {
  return StyleSheet.create<Style>({
    agendaItemWrapper: {
      flex: 1,
      borderRadius: 4,
      paddingVertical: 20,
      paddingHorizontal: 10,
      marginVertical: 20,
      marginHorizontal: 10,
      backgroundColor: '#141E30',
    },
    tagWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });
};
