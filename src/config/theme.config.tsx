import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config:ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
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

const theme = extendTheme({config, styles})
export default theme;
