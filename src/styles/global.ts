import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  body: {
    '-webkit-font-smoothing': 'antialiased',
    background: 'linear-gradient(180deg, #1ea483 0%, #121214 100%)',
    color: '$gray100'
  },
  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  }
})