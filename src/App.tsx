import { useEffect, useRef, useState, WheelEvent } from "react";
import { getScrollDirection } from "./utils/ScrollDirection/ScrollDirection";

import { GlobalStyle } from "./global";

import Intro from "./sections/Intro/Intro";
import About from "./sections/About/About";
import Highlights from "./sections/Projects/Highlights/Highlights";

export enum pagePosition {
  Intro = 0,
  About = 1,
}

function App() {

  const IntroRef = useRef<HTMLElement>(null);
  const AboutRef = useRef<HTMLElement>(null);

  return (
    <>
      <GlobalStyle />
      <Intro IntroRef={IntroRef} />
      <div className="app">
        <About AboutRef={AboutRef} />
        <Highlights />
      </div>
    </>
  );
}

export default App;
