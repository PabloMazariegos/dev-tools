import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  styles: {
    global: {
      '*::-webkit-scrollbar': {
        width: '5px'
      },
      '*::-webkit-scrollbar-track': {
        width: '1px'
      },
      '*::-webkit-scrollbar-thumb': {
        bg: 'gray.700',
        borderRadius: '25px'
      }
    }
  }
};

const theme = extendTheme(config);

export default theme;
