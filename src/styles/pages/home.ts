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
  padding: '2rem',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  alignItems: 'center',
  gap: '2rem',

  img: {
    width: '10rem',
  },

  span: {
    fontSize: '$2xl'
  }
})