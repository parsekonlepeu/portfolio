"use client";

import * as React from "react";

export const Header: React.FC = () => {
  React.useEffect(() => {
    const contenair = document.getElementById("contenair");
    const header = document.getElementById("header");
    const handlerScroll = (e: Event) => {};
    contenair?.addEventListener("scroll", handlerScroll);
    return () => {
      contenair?.removeEventListener("scroll", handlerScroll);
    };
  }, []);
  return <div></div>;
};
