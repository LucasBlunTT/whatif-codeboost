import { styled } from '../../../styles';
import BgHero from '../../../assets/bg-hero.jpg';
import { Container } from '../../../styles/global';

export const SectionHeroStyle = styled('section', {
  position: 'relative',
  zIndex: 1,
  width: '100%',
  height: 731,
  background: `url(${BgHero.src}) no-repeat top center`,
  backgroundAttachment: 'fixed',
  paddingTop: 96,
  display: 'flex',

  '@md': {
    height: 'unset',
  },

  [`${Container}`]: {
    display: 'flex',
    alignItems: 'flex-start',
  },

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 300,
    backgroundImage: 'linear-gradient(transparent, black)',
  },
});

export const AreaSocial = styled('div', {
  width: 72,
  height: '100%',
  borderLeft: '1px solid rgba(255,255,255, 0.2)',
  borderRight: '1px solid rgba(255,255,255, 0.2)',

  '@sm': {
    borderLeft: 'unset',
    borderRight: 'unset',
    position: 'absolute',
    right: 42,
    width: 'max-content',
    height: 'fit-content',
    zIndex: 12,
  },

  ul: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    listStyle: 'none',
    padding: '30px 0',
    borderBottom: '1px solid rgba(255,255,255, 0.2)',
    gap: 32,

    '@sm': {
      flexDirection: 'row',
      borderBottom: 'unset',
    },
  },
});

export const ContentText = styled('div', {
  height: '100%',
  paddingLeft: 96,
  paddingRight: 71,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  flex: 1,
  paddingBottom: 31,
  borderRight: '1px solid rgba(255,255,255, 0.2)',
  zIndex: 3,

  '@mmd': {
    paddingLeft: 24,
    paddingRight: 30,
  },

  '@tmd': {
    height: 'unset',
    paddingTop: 28,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  '.left': {
    flex: 1,
    maxWidth: 574,
    paddingBottom: '10.1rem',

    '@mmd': {
      maxWidth: 400,
    },

    '@md': {
      maxWidth: '100%',
      paddingBottom: '4.8rem',
    },

    h3: {
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '21px',
      letterSpacing: '0.095em',
      color: '#FFA800',
      marginBottom: 8,
    },
    h1: {
      fontWeight: 600,
      fontSize: '61px',
      lineHeight: '71px',
      color: '$white',
      marginBottom: 24,
      maxWidth: 400,

      '@md': {
        fontSize: '48px',
        lineHeight: '56px',
      },
    },
    p: {
      fontWeight: 400,
      fontSize: '1.6rem',
      lineHeight: '2.4rem',
      color: '$gray200',
      maxWidth: 490,
      marginBottom: 32,
    },
    a: {
      display: 'inline-block',
      padding: '15px 52px',
      background: '$red900',
      borderRadius: 5,
      fontWeight: 600,
      fontSize: '1.6rem',
      lineHeight: '2.4rem',
      color: '$white',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      '&:hover': {
        filter: 'brightness(0.8)',
      },
    },
  },
});
