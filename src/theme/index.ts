import {extendTheme} from 'native-base';

const theme = extendTheme({
  components: {
    Text: {
      color: '#e2e8f0',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});

export default theme;
