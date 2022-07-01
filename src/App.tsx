import { GlobalStyle } from "./global";

import Intro from "./sections/Intro/Intro";
import About from "./sections/About/About";
import Highlights from "./sections/Projects/Highlights/Highlights";

function App() {
  return (
    <>
      <GlobalStyle />
      <Intro />
      <div className="app">
        <About />
        <Highlights />
      </div>
    </>
  );
}

export default App;
