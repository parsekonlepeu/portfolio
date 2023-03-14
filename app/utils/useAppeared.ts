import * as React from "react";
import { isInViewport } from "./isInViewport";

export const useAppeared = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [appeared, setAppeared] = React.useState(false);
  React.useEffect(() => {
    const handlerEvent = () => {
      const isIn = ref.current ? isInViewport(ref.current) : false;
      isIn && setAppeared(isIn);
      isIn && contenair?.removeEventListener("scroll", handlerEvent);
    };
    const contenair = document.getElementById("contenair");
    contenair?.addEventListener("scroll", handlerEvent);
    return () => contenair?.removeEventListener("scroll", handlerEvent);
  }, []);
  return {
    ref: ref,
    appeared: appeared,
  };
};
