import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html, body, input, button {
      font-family: 'Montserrat', sans-serif;
    }

    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
`;
