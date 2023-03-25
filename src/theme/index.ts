import {DefaultTheme as PaperDefaultTheme} from 'react-native-paper';
import {Theme as PaperTheme} from 'react-native-paper/lib/typescript/types';
import {Colors, CustomColors} from './colors';

type PaperColors = PaperTheme['colors'];
type AllColors = PaperColors & CustomColors;

export interface Theme extends PaperTheme {
  colors: AllColors;
}

export const DefaultTheme: Theme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    backgroundLight: Colors.backgroundLight,
    white: Colors.white,
    black: Colors.black,
    greyBlack: Colors.greyBlack,
    blue: Colors.blue,
    mattBlue: Colors.mattBlue,
    grey: Colors.grey,
    blueGrey: Colors.blueGrey,
    lightGreen: Colors.lightGreen,
    mattGreen: Colors.mattGreen,
    red: Colors.red,
  },
};
