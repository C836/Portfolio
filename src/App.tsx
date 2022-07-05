import { useEffect, useRef, useState, WheelEvent } from "react";
import { getScrollDirection } from "./utils/Scroll/ScrollDirection";

import { GlobalStyle } from "./global";

import Intro from "./sections/Intro/Intro";
import About from "./sections/About/About";
import Highlights from "./sections/Projects/Highlights/Highlights";
import Pagination from "./components/Pagination/Pagination";
import Extras from "./sections/Projects/Extras/Extras";
import { Background } from "./layout/Background/Background.styled";

interface RefsConfig {
  [key: string]: React.RefObject<HTMLElement>;
}

function App() {
  const appSections = ["IntroRef", "AboutRef", "HighlightRef1", "HighlightRef2", "HighlightRef3", "ExtraRef1", "ExtraRef2"];
  const [currentPageIndex, setPageIndex] = useState(0);

  const scroll = (scrollSection: string) => {
    Refs[scrollSection].current?.
      scrollIntoView({ 
      behavior: "smooth",
      block: 'center',
      inline: 'center' });
  };

  const Refs: RefsConfig = {
    IntroRef: useRef<HTMLElement>(null),
    AboutRef: useRef<HTMLElement>(null),

    HighlightRef1: useRef<HTMLElement>(null),
    HighlightRef2: useRef<HTMLElement>(null),
    HighlightRef3: useRef<HTMLElement>(null),

    ExtraRef1: useRef<HTMLElement>(null),
    ExtraRef2: useRef<HTMLElement>(null)
  };

  const handleScroll = (event: WheelEvent) => {
    const direction = getScrollDirection(event);

    if (direction === "up" && currentPageIndex > 0) {
      setPageIndex(currentPageIndex - 1);
    } else if (
      direction === "down" &&
      currentPageIndex < appSections.length - 1
    ) {
      setPageIndex(currentPageIndex + 1);
    }
  };

  useEffect(() => {
    console.log(currentPageIndex);
    const currentPageSection = appSections[currentPageIndex];

    scroll(currentPageSection);
  }, [currentPageIndex]);

  return (
    <div onWheel={handleScroll}>
      <GlobalStyle />
      <Background />
      <Pagination 
      pageIndex={currentPageIndex}
      sections = {appSections} />
      <Intro IntroRef={Refs.IntroRef} />
      <div className="app">
        <About AboutRef={Refs.AboutRef} />
        <Highlights
          HighlightRef1={Refs.HighlightRef1}
          HighlightRef2={Refs.HighlightRef2}
          HighlightRef3={Refs.HighlightRef3}
        />
        <Extras
          ExtraRef1={Refs.ExtraRef1}
          ExtraRef2={Refs.ExtraRef2} />
      </div>
    </div>
  );
}

export default App;
