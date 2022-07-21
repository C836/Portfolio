import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  --main: #217cd1;

  --z-index-contact: 10;
  --z-index-dropdown: 9;
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
  opacity: 1;

  @media (max-width: 850px){
  	overflow: auto;
  }
}

.padding{
  padding: 0 5%;
  max-width: 1000px;
  margin: 0 auto;
}

`;
