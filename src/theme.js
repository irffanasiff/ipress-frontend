import { extendTheme } from '@chakra-ui/react';
import '@fontsource/space-grotesk';
import '@fontsource/karla';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  colors: {
    ipress: {
      100: '#F8F8F8',
      200: '#C4C4C4',
      300: '#ADADAD',
      400: '#FFBFC0',
      500: '#FF3839',
      600: '#222222',
    },
  },
  fonts: {
    heading: 'Space Grotesk, sans-serif',
    body: 'Karla, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        background: '#ffffff',
        color: '#222222',
      },
    },
  },
  components: {
    Button: {
      variants: {
        'custom-black': {
          bg: 'transparent',
          border: '1px solid black',
          fontWeight: '300',
          color: 'black',
          fontSize: 'xl',
          textTransform: 'uppercase',
          rounded: 'full',
          p: '1.5rem',
        },
      },
    },
    Input: {
      variants: {
        custom: {
          outline: '0px',
          rounded: '0px',
          borderRadius: '0px',
        },
      },
    },
  },
});

export default theme;
