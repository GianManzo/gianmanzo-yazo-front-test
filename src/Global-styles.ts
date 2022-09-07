import { createGlobalStyle } from 'styled-components';

export const Colors = {
  red: '#811B39',
  redLight: '#f2e8eb',
  yellow: '#FCC325',
  yellowStrong: '#FFA00C',
  green: '#00C07F',
  gray: '#0000001A',
  orangeLight: '#FD9F2B2F',
};

export const GlobalStyles = createGlobalStyle`
  body {
    a{
      text-decoration: none;
    
    }
  }

  @media (min-width: 1920px) {
    html{
      font-size: 110%;
    }
  }
`;
