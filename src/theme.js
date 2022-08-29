import { extendTheme } from '@chakra-ui/react';
import '@fontsource/space-grotesk';
import '@fontsource/karla';
import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`@font-face {
        font-family: 'Futura';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local("Futura"),
        url("./fonts/FuturaBT-Medium.ttf") format("truetype");
      }
      `}
  />
);

const config = {
  initialColorMode: 'light',
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
    main: {
      100: '',
      200: '#8AADCF',
      300: '',
      400: '#00509E',
      500: '#C8D9EA',
    },
  },
  fonts: {
    heading: 'Futura, sans-serif',
    body: 'Futura, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        background: '#ffffff',
        color: '#222222',
      },
      _placeholder: {
        color: 'gray',
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
          p: '1.5rem',
        },
        'ipress-black': {
          textTransform: 'uppercase',
          borderRadius: '30px',
          fontWeight: 600,
          fontSize: {
            base: '11px',
            sm: '12px',
            md: '11px',
            lg: '14px',
          },
          letterSpacing: '2px',
          py: '25px',
          bg: 'black',
          color: 'white',
          border: '1px solid black',
          _hover: {
            bg: 'white',
            color: 'black',
          },
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
