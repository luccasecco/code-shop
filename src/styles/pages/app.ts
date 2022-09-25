import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  padding: '4rem 2rem',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxHeight: 80,

  '.logo-container': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    span: {
      fontSize: '$lg'
    }
  },

  button: {
    border: 0,
    padding: '0.8rem',
    borderRadius: '50%',
    lineHeight: 0,
    backgroundColor: '$gray800',
    color: '#1ea450',
    cursor: 'pointer',
    transition: 'backgroundColor 0.2s ease-in-out',

    '&:hover': {
      backgroundColor: '$gray900',
    }
  }

})