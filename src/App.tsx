import { useEffect, useRef } from "react";
import { useScrollDirection } from "./utils/ScrollDirection/ScrollDirection";

import { GlobalStyle } from "./global";

import Intro from "./sections/Intro/Intro";
import About from "./sections/About/About";
import Highlights from "./sections/Projects/Highlights/Highlights";

function App() {
  const AboutRef = useRef<HTMLElement>(null)

  const ScrollDirection = useScrollDirection()

  useEffect(()=> {
    console.log(ScrollDirection)
  },[ScrollDirection])

  return (
    <>
      <button onClick={() => AboutRef.current?.scrollIntoView({behavior: "smooth"})  }>Scroll</button>
      <GlobalStyle />
      <Intro />
      <div className="app">
        <About AboutRef = {AboutRef} />
        <Highlights />
      </div>
    </>
  );
}

export default App;
