import { globalCss, styled } from './index';

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    fontFamily: 'Poppins, sans-serif',
  },

  html: {
    fontSize: '62.5%',

    '@md': {
      fontSize: '50%',
    },
  },
  body: {
    background: 'linear-gradient(119.36deg, #010101 0%, #000000 100%);',
    color: '$white',
    '-webkit-font-smoothing': 'antialiased',
    textRendering: 'optimizeLegibility',
    '-moz-osx-font-smoothing': 'grayscale',
    '-ms-text-size-adjust': '100%',
    '-webkit-text-size-adjust': '100%',
  },
  img: {
    maxWidth: '100%',
    display: 'block',
  },
  button: {
    cursor: 'pointer',
    border: 'none',
  },
  a: {
    textDecoration: 'none',
  },
});

export const Container = styled('div', {
  width: '100%',
  maxWidth: 1248,
  margin: '0 auto',
  padding: '0 16px',
});
