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
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

body {
  overflow: hidden;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  opacity: 1;
}

.app{
  padding: 0 5%;
}

`;
