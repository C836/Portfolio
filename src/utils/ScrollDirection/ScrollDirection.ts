import { useEffect, useState } from "react";

export enum ScrollDirection {
  up = "up",
  down = "down",
}

export const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState(ScrollDirection.up);

  const handleScroll = (event: WheelEvent) => {
    if (event.deltaY < 0) {
      setScrollDir(ScrollDirection.up);
    } else if (event.deltaY > 0) {
      setScrollDir(ScrollDirection.down);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return scrollDir;
};
