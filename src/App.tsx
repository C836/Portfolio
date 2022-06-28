import { GlobalStyle } from "./global";
import { Fragment } from "react";

import Intro from "./sections/Intro/Intro";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Intro />
    </Fragment>
  );
}

export default App;
