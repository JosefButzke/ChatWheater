import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
    background: white;
  }
  
  body {
      background: #E5E0F0;
      -webkit-font-smoothing: antialiased;
  }
  body, input, button {
      font-family: Roboto, sans-serif;
  }
`;