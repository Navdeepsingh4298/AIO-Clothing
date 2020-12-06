import { createGlobalStyle } from 'styled-components';

//const colors = [#ffd369, #eee, #393e46, #222831];

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Open Sans Condensed';
  width: 100%;
  height: 100%;
}

::selection {
  background: #ffd369;
}



a {
  text-decoration: none;
  color: black;
}
* {
  box-sizing: border-box;
}

//scrollbar
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #e6be5c;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #d4a83e;
}

`;
