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
  padding: '4rem 0',
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

    img: {
      cursor: 'pointer',
    },

    span: {
      fontSize: '$lg'
    }
  },

  button: {
    border: 0,
    padding: '0.8rem',
    borderRadius: '50%',
    lineHeight: 0,
    backgroundColor: '$green300',
    color: '$gray900',
    cursor: 'pointer',
    transition: 'filter 0.2s ease-in-out',

    '&:hover': {
      filter: 'brightness(0.9)',
    }
  }

})