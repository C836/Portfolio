import {
  JSXElementConstructor,
  RefObject,
  useEffect,
  useRef,
  useState,
  WheelEvent,
} from "react";
import { getScrollDirection } from "./utils/Scroll/ScrollDirection";

import { GlobalStyle } from "./global";

import Intro from "./sections/Intro/Intro";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Pagination from "./components/Pagination/Pagination";
import { Background } from "./layout/Background/Background.styled";
import Contact from "./sections/Contact/Contact";
import useWindowDimensions from "./utils/WindowDimensions";
import Stacks from "./sections/Stacks/Stacks";

interface RefsConfig {
  [key: string]: any;
}

function App() {
  const [max_index_after_mount, setMaxIndex] = useState(0);
  const [currentPageIndex, setPageIndex] = useState(0);

  const { width } = useWindowDimensions();

  const scroll = (scrollSection: number) => {
    const selected_Section: RefObject<HTMLElement> | any =
      BaseRefs.current[scrollSection];

    selected_Section.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  const BaseRefs = useRef<React.RefObject<HTMLElement>[]>([]);
  BaseRefs.current = [];

  const number_of_sections = 5;

  const addToRef = (element: React.RefObject<HTMLElement>) => {
    console.log(element);
    if (element && !BaseRefs.current.includes(element)) {
      BaseRefs.current.push(element);
    }
  };

  const handleScroll = (event: WheelEvent) => {
    const direction = getScrollDirection(event);

    if (direction === "up" && currentPageIndex > 0) {
      setPageIndex(currentPageIndex - 1);
    } else if (
      direction === "down" &&
      currentPageIndex < BaseRefs.current.length - 1
    ) {
      setPageIndex(currentPageIndex + 1);
    }
  };

  useEffect(() => {
    if (width >= 850) {
      scroll(currentPageIndex);
    }
  }, [currentPageIndex]);

  useEffect(() => {
    setMaxIndex(Object.values(BaseRefs.current).length - 1);
  }, []);

  return (
    <div onWheel={handleScroll}>
      <GlobalStyle />
      <Background />

      {width >= 850 && (
        <Pagination
          pageIndex={
            currentPageIndex === max_index_after_mount
              ? 4
              : currentPageIndex <= 3
              ? currentPageIndex
              : 3
          }
          sections_Count={number_of_sections}
        />
      )}

      <Intro IntroRef={addToRef} />
      <div className="padding">
        <About AboutRef={addToRef} />
        <Stacks TechRef={addToRef} />
        <Projects ProjectRef={addToRef} />
      </div>

      <Contact ContactRef={addToRef} />
    </div>
  );
}

export default App;
