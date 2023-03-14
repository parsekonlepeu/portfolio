import * as React from "react";
import Image from "next/image";
import agenda from "../public/agenda.jpg";

import "../styles/globals.css";
import { Header } from "./component/Header";
import clsx from "clsx";
import { Home } from "./component/Home";
import { NetworkLink } from "./component/NetworkLink";
import { EmailLink } from "./component/EmailLink";
import { About } from "./component/About";
import Link from "next/link";
import logoP from "../public/logoP.png";
import { Realisation } from "./component/Realisation";
import { NavBar } from "./component/NavBar";
import Head from "next/head";
import { Contact } from "./component/Contact";

const style = {
  contenair: clsx(
    "absolute",
    "top-0",
    "left-0",
    "bottom-0",
    "right-0",
    "overflow-y-scroll",
    "bg-primary",
    "overflow-x-hidden"
  ),
  sectionBase: clsx(
    "w-section",
    "bg-primary",
    "justify-center",
    "items-center",
    "flex",
    "forAbout:w-full"
  ),
};

const Main: React.FC = () => {
  return (
    <div
      className={style.contenair}
      id="contenair"
    >
      <Header />
      <NetworkLink />
      <EmailLink />
      <NavBar />
      <main
        id="main"
        className="pt-16 flex flex-col pb-4 items-center duration-200"
      >
        <section
          id="home"
          className={clsx(
            "w-section",
            "max-w-1000",
            "bg-primary",
            "ml-16",
            "mr-16",
            "forAbout:w-full",
            "forAbout:pl-5",
            "h-screen",
            "flex",
            "justify-start",
            "items-center"
          )}
        >
          <Home />
        </section>
        <section
          id="about"
          className={clsx(style.sectionBase)}
        >
          <About />
        </section>
        <section
          id="Realisation"
          className={clsx(
            style.sectionBase,
            "mt-24",
            "justify-end",
            "items-end"
          )}
        >
          <Realisation />
        </section>
        <section
          id="contact"
          className={clsx(style.sectionBase)}
        >
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Main;
