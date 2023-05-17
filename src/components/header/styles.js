import { styled } from '../../styles';
import { Container } from '../../styles/global';

export const HeaderStyle = styled('header', {
  position: 'absolute',
  top: 0,
  width: '100%',
  height: 96,
  borderBottom: '1px solid rgba(255,255,255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 2022,

  [`${Container}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },

  '.logo': {
    position: 'relative',
    padding: '0 23px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    borderLeft: '1px solid rgba(255,255,255, 0.2)',

    '&:before': {
      content: '',
      backgroundColor: '$red800',
      boxShadow: '0px 2px 4px rgba(255, 4, 13, 0.16)',
      position: 'absolute',
      bottom: 0,
      width: 104,
      height: 1,
      left: 23,
    },
  },

  '.code': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: '0 23px',
    borderLeft: '1px solid rgba(255,255,255, 0.2)',
    borderRight: '1px solid rgba(255,255,255, 0.2)',
  },
});
