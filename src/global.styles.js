import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Open Sans Condensed';
  padding: 20px 40px;

  @media screen and (max-width: 800px) {
    padding: 10px;
    width: 100%;
    height: 100%;
  }
}

a {
  text-decoration: none;
  color: black;
}
* {
  box-sizing: border-box;
}

`;
