"use client";

import * as React from "react";

export const Header: React.FC = () => {
  React.useEffect(() => {
    const contenair = document.getElementById("contenair");
    const header = document.getElementById("header");
    const handlerScroll = (e) => {
      console.log(e);
    };
    contenair?.addEventListener("scroll", handlerScroll);
    console.log(contenair);
    return () => {
      contenair?.removeEventListener("scroll", handlerScroll);
    };
  }, []);
  return <div></div>;
};
