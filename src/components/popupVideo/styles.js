import { styled } from '../../styles';
import BgThumb from '../../assets/thumb-video.png';

export const PopupVideoStyle = styled('div', {
  width: '100%',
  maxWidth: 312,

  '@md': {
    alignSelf: 'flex-end',
  },

  span: {
    display: 'block',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: '18px',
    letterSpacing: '0.095em',
    color: '$gray100',
    marginBottom: 14,
  },
  button: {
    width: '100%',
    height: 179,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `url(${BgThumb.src}) no-repeat center center`,
    border: 0,
    borderRadius: 10,

    '&:hover': {
      '& > div': {
        transform: 'scale(1.1)',
      },
    },

    '& > div': {
      width: 47,
      height: 47,
      background: 'rgba(19, 19, 19, 0.8)',
      backdropFilter: 'blur(2.5px)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
    },
  },
});
