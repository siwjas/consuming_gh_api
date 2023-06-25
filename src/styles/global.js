import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    background: #2b2d42;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    color: #2b2d42;
  }
`;
