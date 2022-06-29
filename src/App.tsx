import { GlobalStyle } from "./global";

import Intro from "./sections/Intro/Intro";
import About from "./sections/About/About";

function App() {
  return (
    <>
      <GlobalStyle />
      <Intro />
      <div className="app">
        <About />
      </div>
    </>
  );
}

export default App;
