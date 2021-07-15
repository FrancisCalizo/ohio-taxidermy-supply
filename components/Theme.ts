import { css } from 'styled-components';

export const theme = {
  global: {
    setFocus: (color: string) => {
      return css`
        &:focus {
          outline: none;
          box-shadow: 0 0 8px 3px ${color};
        }
      `;
    },
    setInputFocus: (color: string) => {
      return css`
        &:focus {
          outline: none;
          border-color: ${color};
        }
      `;
    },
  },
  colors: {
    purple: '#AEB5D8',
    paleBlue: '#CCD7EA',
    pink: '#EDBECD',
    teal: '#93DFF3',
    yellow: '#F6E9B5',
    green: '#C1DDCF',
    gray: '#7A7A7A',
    darkGray: '#202020',
  },
  button: {
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.4)`,
  },
  input: {
    fontSize: '1rem',
    padding: '.75rem',
  },
};
