import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  --main: #152c72;
}

html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  opacity: 1;
  background: 
    linear-gradient(90deg, #000 25px, transparent 1%) center,
    linear-gradient(#000 25px, transparent 1%) center;
  background-size: 26px 26px;
}

`;
