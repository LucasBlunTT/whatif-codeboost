import { styled } from '../../../styles';

export const StyleSectionCharacters = styled('section', {
  paddingTop: 56,
  paddingBottom: 72,

  '@md': {
    paddingBottom: 0,
  },

  '.title': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 56,

    '@xs': {
      justifyContent: 'space-between',
    },

    span: {
      display: 'block',
      fontWeight: '400',
      fontSize: 18,
      lineHeight: '27px',
      color: '$white',
      opacity: '0.4',
      marginRight: 113,

      '@xs': {
        marginRight: 'unset',
      },
    },

    h2: {
      position: 'relative',
      width: '100%',
      maxWidth: 216,
      fontWeight: '600',
      fontSize: 25,
      lineHeight: '35px',
      color: '$white',
      paddingLeft: 16,

      '&:before': {
        content: '',
        position: 'absolute',
        top: 5.5,
        left: 0,
        backgroundColor: '$red800',
        width: 2,
        height: 59,
      },
    },
  },
});

export const StyleListCharacters = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))',
  gridGap: '40px 33px',

  '.marvel': {
    width: 280,
    height: 368,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '@md': {
      width: '100%',
    },
  },
});
