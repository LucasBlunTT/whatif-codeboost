import { styled } from '../../styles';

export const StyleCard = styled('div', {
  width: '100%',
  maxWidth: 280,
  display: 'block',

  '@mmd': {
    maxWidth: '100%',
  },

  '&:hover': {
    '.image': {
      img: {
        transform: 'scale(1.1)',
      },
    },
    '.info': {
      h3: {
        color: '$red800',
      },
    },
  },

  '.image': {
    width: '100%',
    height: 372,
    marginBottom: 16,
    overflow: 'hidden',
    borderRadius: 5,

    img: {
      borderRadius: 5,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'all 0.3s ease',
    },
  },

  '.info': {
    display: 'flex',
    justifyContent: 'space-between',

    h3: {
      fontWeight: 600,
      fontSize: 18,
      lineHeight: '27px',
      color: '$white',
      marginBottom: 4,
      transition: 'all 0.3s ease',
    },

    span: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '21px',
      color: '$gray500',
    },
    '.serie': {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '21px',
      color: '$white',
      opacity: '0.4',
    },
  },
});
