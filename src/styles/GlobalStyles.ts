import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
  }
  *, button, input {
    background: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    outline: none;
  }
  :root {
    --color-primary: #212529;
    --color-black: #212529;
    --color-white: #FFF;
    --color-grey: #b7b7a4;
    --color-orange: #e76f51;
    --color-green: #285F41;

    --color-border: #E5E5E5;
  }
`;