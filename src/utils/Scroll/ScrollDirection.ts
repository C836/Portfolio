import { WheelEvent } from "react";

export const getScrollDirection = (event: WheelEvent) => {
  return (
    event.deltaY < 0 
    ? "up"
    : "down"
  )
};
