import { useEffect, useRef, useState, WheelEvent } from "react";
import { getScrollDirection } from "./utils/ScrollDirection/ScrollDirection";

import { GlobalStyle } from "./global";

import Intro from "./sections/Intro/Intro";
import About from "./sections/About/About";
import Highlights from "./sections/Projects/Highlights/Highlights";

const appSections = [ "Intro", "About" ]

function App() {
  const [currentPagePosition, setPagePosition] = useState(0);

  const scroll:any = {
    toIntro: () => {
      IntroRef.current?.scrollIntoView({ behavior: "smooth" });
    },
    toAbout: () => {
      AboutRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  };

  const IntroRef = useRef<HTMLElement>(null);
  const AboutRef = useRef<HTMLElement>(null);

  const handleScroll = (event: WheelEvent) => {
    const direction = getScrollDirection(event);

    setPagePosition(direction === "up" ? 0 : 1);
  };

  useEffect(()=> {
    scroll[`to${appSections[currentPagePosition]}`]()
  }, [currentPagePosition])

  return (
    <div onWheel={handleScroll}>
      <GlobalStyle />
      <Intro IntroRef={IntroRef} />
      <div className="app">
        <About AboutRef={AboutRef} />
        <Highlights />
      </div>
    </div>
  );
}

export default App;
