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
  color: white;
}

body {
  overflow: hidden;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  opacity: 1;
  background: 
    linear-gradient(90deg, #000 25px, transparent 1%) center,
    linear-gradient(#000 25px, #000000c1 1%) center;
  background-size: 26px 26px;
}

.app{
  padding: 0 5%;
}

`;
