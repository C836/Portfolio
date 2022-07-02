import { useEffect, useRef, useState, WheelEvent } from "react";
import { getScrollDirection } from "./utils/Scroll/ScrollDirection";

import { GlobalStyle } from "./global";

import Intro from "./sections/Intro/Intro";
import About from "./sections/About/About";
import Highlights from "./sections/Projects/Highlights/Highlights";

interface RefsConfig {
  [key: string]: React.RefObject<HTMLElement>
}

function App() {
  const appSections = [ "IntroRef", "AboutRef" ]
  const [currentPageIndex, setPageIndex] = useState(0);

  const scroll = (scrollSection:string) => {
    Refs[scrollSection].current?.scrollIntoView({ behavior: "smooth" });
  };

  const Refs:RefsConfig = {
    IntroRef : useRef<HTMLElement>(null),
    AboutRef : useRef<HTMLElement>(null)
  } 

  const handleScroll = (event: WheelEvent) => {
    const direction = getScrollDirection(event);

    setPageIndex(direction === "up" ? 0 : 1);
  };

  useEffect(()=> {
    const currentPageSection = appSections[currentPageIndex]

    scroll(currentPageSection)
  }, [currentPageIndex])

  return (
    <div onWheel={handleScroll}>
      <GlobalStyle />
      <Intro IntroRef={Refs.IntroRef} />
      <div className="app">
        <About AboutRef={Refs.AboutRef} />
        <Highlights />
      </div>
    </div>
  );
}

export default App;
